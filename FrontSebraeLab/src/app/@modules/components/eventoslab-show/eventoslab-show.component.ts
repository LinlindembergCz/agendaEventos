import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestPromiseService } from 'src/app/@shared/services/request-promise.service';

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
      this.http.get<any>("assets/data","eventsLab.json").
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
          });
  }

}
