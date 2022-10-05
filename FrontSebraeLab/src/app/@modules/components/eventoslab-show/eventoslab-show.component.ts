import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestPromiseService } from 'src/app/@shared/services/request-promise.service';
import { environment } from 'src/environments/environment';

class Eventlab {
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
    this.getInfo(); 
  }


  getInfo() 
  { 
      /*this.http.get<any>("assets/data","eventsLab.json").
      then(x => {      
            x.forEach(e => {
                          this.itens.push( {
                             name: e.name,
                             summary:e.summary, 
                             hourStart: e.hourStart ,
                             hourEnd: e.hourEnd, 
                             dateStart: e.dateStart, 
                             dateEnd: e.dateEnd
                           });
                      }); 
                      this.eventslab = this.itens;  
                      //console.log(this.eventslab)        
          });*/

          this.http.get<any[]>(environment.services.api,"EventoSebraeLab").
          then((x: any) => { 
            console.log('EVENTOS');
            console.log(x);
                           x.forEach(e => 
                             {                    
                                this.itens.push( {  name: e.titulo,
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
