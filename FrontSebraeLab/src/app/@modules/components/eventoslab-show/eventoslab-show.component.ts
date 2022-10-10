import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestPromiseService } from 'src/app/@shared/services/request-promise.service';
import { environment } from 'src/environments/environment';

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


  eventslab: Eventlab[] = [];
  itens: any[]=[];

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
                          this.itens.push( {  id: e.id,
                                              name: e.titulo,
                                              summary:e.subtitulo, 
                                              hourStart: e.dias[0].horainicio,
                                              hourEnd: e.dias[e.dias.length-1].horafim, 
                                              dateStart: new Date(e.dias[0].data).getDate(), 
                                              dateEnd: new Date(e.dias[e.dias.length-1].data).getDate() 
                                            });
                        }); 
                        this.eventslab = this.itens;                 
                      }); 
  }

}
