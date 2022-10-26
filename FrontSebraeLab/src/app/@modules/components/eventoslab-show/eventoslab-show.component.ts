import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meses } from 'src/app/@core/enums/ListaMeses';
import { RequestPromiseService } from 'src/app/@shared/services/request-promise.service';
import { environment } from '../../../../environments/environment';

class Eventlab {
  id: string;
  name: string ;
  hourStart: string ;
  hourEnd: string;
  summary: string;
  dateStart: string;
  dateEnd: string;
}


@Component({
  selector: 'app-eventoslab-show',
  templateUrl: './eventoslab-show.component.html',
  styleUrls: ['./eventoslab-show.component.scss']
})
export class EventoslabShowComponent implements OnInit {


  alleventslab: any[] = [];
  eventslab: Eventlab[] = [];


  constructor(
    private http: RequestPromiseService,
    private route: Router
  ) { }

  ngOnInit(): void {  
    this.LoadEventos(); 
  }


  LoadEventos() 
  { 
    this.http.get<any[]>(environment.services.api,environment.routes.eventoSebraeLab.root).
    then((x: any) => { 
                      x.forEach(e => 
                        {                    
                          this.alleventslab.push( {  id: e.id,
                                                  titulo: e.titulo,
                                                  subtitulo:e.subtitulo, 
                                                  horainicio: e.dias[0].horainicio,
                                                  horafim: e.dias[e.dias.length-1].horafim, 
                                                  data :new Date(e.dias[0].data),
                                                  datainicio: new Date(e.dias[0].data).getDate(), 
                                                  datafim: new Date(e.dias[e.dias.length-1].data).getDate() 
                                             });
                        }); 
                        //this.alleventslab = this.itens.sort((a, b) => {{ return a.datainicio > b.datainicio ? 1: -1 }} ) ;                 
                         this.selectThisMonth();  
                      }); 
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
    
  }

  getMonthDescription(data:any)
  { 
    return Meses[new Date(data).getMonth()]
  }

}
