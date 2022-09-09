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
  selector: 'app-proximos-eventos-show',
  templateUrl: './proximos-eventos-show.component.html',
  styleUrls: ['./proximos-eventos-show.component.scss']
})
export class ProximosEventosShowComponent implements OnInit {

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
            x.forEach(e => {  this.itens.push( {
                              name: e.name,
                              summary:e.summary, 
                              hourStart: e.hourStart ,
                              hourEnd: e.hourEnd, 
                              dateStart: String(e.dateStart).substring(0,2), 
                              dateEnd: String(e.dateEnd).substring(0,2) });
                           }); 
            this.eventslab = this.itens.sort(function (a, b) 
            {
              return (a.dateStart > b.dateStart) ?1:(a.dateStart < b.dateStart)?-1:0;
            });  
   
          });
  }

}
