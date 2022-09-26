import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tooltip } from 'primeng/tooltip';
import { Eventolab } from 'src/app/@core/models/eventolab.model';
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
  days:number;
  tip:string;
}

@Component({
  selector: 'app-evento-list',
  templateUrl: './evento-list.component.html',
  styleUrls: ['./evento-list.component.scss']
})
export class EventoListComponent implements OnInit {

  eventslab: Eventlab[] = [];
  itens: any[]=[];

  constructor(
    private http: RequestPromiseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
     this.getInfo(); 
  }

  showAlterarEvento(id: string)
  {
    this.router.navigate([`/alterarevento`], { queryParams: { id: id} } ) 
  }
  
  getInfo() 
  { 
      this.http.get<Eventolab[]>(environment.services.api,"EventoSebraeLab").
      then(x => {  
                   x.forEach( e=>{           

                  let startEvent: any = e.dias[0];//primeiro evento
                  let endEvent: any = e.dias[e.dias.length - 1];//ultimo evnto               
                  let startDay : string = startEvent?.data;//data inicial
                  let endDay: string = endEvent?.data;//data final   
                  
                  let days: string="";
                  e.dias.forEach(d => days += String(d.data).substring(8,10)+'/' );

                  this.itens.push({ id:e.id,
                                    name: e.titulo,
                                    summary:e.descricaoevento, 
                                    hourStart: startEvent?.horainicio ,
                                    hourEnd: endEvent?.horafim, 
                                    dateStart:  startDay?.substring(8,10), //primeiro dia
                                    dateEnd: endDay?.substring(8,10), //ultimo dia
                                    days: e.dias.length,
                                    tip: days
                                  });
                  });              
                        
              this.eventslab = this.itens;//.sort(function (a, b) 
              //{
             //   return (a.dateStart > b.dateStart) ?1:(a.dateStart < b.dateStart)?-1:0;
             // }); 

      });
       



  }

}
