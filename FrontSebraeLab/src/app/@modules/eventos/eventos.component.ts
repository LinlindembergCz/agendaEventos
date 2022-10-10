import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RequestPromiseService } from 'src/app/@shared/services/request-promise.service';
import { environment } from 'src/environments/environment';
import { FileService } from '../user/services/file.service';


class Eventlab {
  id: string;
  name: string ;
  hourStart: string ;
  hourEnd: string;
  summary: string;
  dateStart: string;
  dateEnd: string;
  picture: string;
  linksparainscricao: string;
}

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {


  eventslab: any[] = [];

  fullCalendar: boolean = true;

  
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
    then((x: any) => { 
                          x.forEach(e => 
                          {                
                              this.eventslab.push({
                                                    id: e.id,
                                                    titulo: e.titulo,
                                                    subtitulo:e.subtitulo, 
                                                    horainicio: e.dias[0].horainicio,
                                                    horafim: e.dias[e.dias.length-1].horafim, 
                                                    datainicio: new Date(e.dias[0].data).getDate(), 
                                                    datafim: new Date(e.dias[e.dias.length-1].data).getDate() ,
                                                    picture: '',//,
                                                    linksparainscricao: e.linksparainscricao
                                                  });
                              let evento : any = this.eventslab.find( x=> x.id==e.id);                

                             
                            this.fileService.download(evento.id + '.png').
                              subscribe( 
                                (event)=>{  if (event.type === HttpEventType.Response)
                                            { 
                                                const downloadedFile = new Blob([event.body], { type: event.body.type });
                                                const urlToBlob = window.URL.createObjectURL(downloadedFile);                                        
                                                evento.picture =  this._sanitizer.bypassSecurityTrustResourceUrl(urlToBlob);
                                            }
                                         })                    
                          });
                                               
                    }); 
  }

}
