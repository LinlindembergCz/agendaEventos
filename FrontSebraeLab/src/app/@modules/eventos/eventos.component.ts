import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RequestPromiseService } from 'src/app/@shared/services/request-promise.service';
import { environment } from '../../../environments/environment';
import { FileService } from '../user/services/file.service';
import {Meses} from '../../@core/enums/ListaMeses';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  alleventslab: any[] = [];
  eventslab: any[] = [];

  fullCalendar: boolean = false;

  
  constructor(
    private http: RequestPromiseService,
    private route: Router,
    private _sanitizer: DomSanitizer,
    private fileService: FileService,
  ) { }

  ngOnInit(): void {      
    this.LoadEventos(); 
  }


  LoadEventos() 
  { 
    this.http.get<any[]>(environment.services.api,environment.routes.eventoSebraeLab.root).
    then((x: any) => 
    { 
        x.forEach(e => 
        {                
            let dias: string="";
            e.dias.forEach(d => dias += String(d.data).substring(8,10)+'/' );

            this.alleventslab.push({
                                  id: e.id,
                                  titulo: e.titulo,
                                  subtitulo:e.subtitulo, 
                                  horainicio: e.dias[0].horainicio,
                                  horafim: e.dias[e.dias.length-1].horafim, 
                                  data :new Date(e.dias[0].data),
                                  datainicio: new Date(e.dias[0].data).getDate(), 
                                  datafim: new Date(e.dias[e.dias.length-1].data).getDate() ,
                                  picture: '',//,
                                  dias: e.dias.length,
                                  linksparainscricao: e.linksparainscricao
                                });

            let evento : any = this.alleventslab.find( x=> x.id==e.id);   

            this.fileService.download('eventos', evento.id + '.png').
            subscribe( 
              (event)=>{  if (event.type === HttpEventType.Response)
                          { 
                            const downloadedFile = new Blob([event.body], { type: event.body.type });
                            const urlToBlob = window.URL.createObjectURL(downloadedFile);                                        
                            evento.picture =  this._sanitizer.bypassSecurityTrustResourceUrl(urlToBlob);
                          }
                        })                    
        }); 
        
        this.selectThisMonth();                          
    }); 
  }

  getMonthDescription(data:any)
  { 
    return Meses[new Date(data).getMonth()]
  }


  getWeek( data: Date)
  {
    let currentdate: any = data;    
    var oneJan: any = new Date(currentdate.getFullYear(),0,1);
    var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
    return Math.ceil(( currentdate.getDay() + (7 - currentdate.getDay() ) + numberOfDays) / 7);
  }


  selectThisWeek()
  {  
    this.fullCalendar = false;
    this.eventslab=[];
    this.alleventslab.sort((a, b) => {{ return a.data > b.data ? 1: -1 }} ) 
    .forEach( e=>{
        if (this.getWeek( e.data ) ==  this.getWeek( new Date() ) )
        {
          this.eventslab.push(e) 
        }
    });

  }

  selectNextWeek()
  {
    this.fullCalendar = false;
    this.eventslab=[];
    this.alleventslab.sort((a, b) => {{ return a.data > b.data ? 1: -1 }} )      
    .forEach( e=>{
        if (this.getWeek( e.data ) ==  this.getWeek( new Date() ) + 1 )
           { 
            this.eventslab.push(e)
           }
    });
  }

  selectThisMonth()
  {
    this.fullCalendar = false;
    this.eventslab=[];
    let currentMonth= new Date().getMonth();
    this.alleventslab.sort((a, b) => {{ return a.data > b.data ? 1: -1 }} )   
    .forEach( e=>{
        if (new Date(e.data).getMonth() == currentMonth )
        { this.eventslab.push(e) }
    });
  }

  selectNextMonth()
  {
    this.fullCalendar = false;
    this.eventslab=[];
    let currentMonth= new Date().getMonth();
    this.alleventslab.sort((a, b) => {{ return a.data > b.data ? 1: -1 }} )   
    .forEach( e=>{
        if (new Date(e.data).getMonth() == currentMonth+1 )
        { this.eventslab.push(e) }
    });
  }

  showCalendar()
  {
    this.fullCalendar = true;
  }

}
