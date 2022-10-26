import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tooltip } from 'primeng/tooltip';
import { Eventolab } from '../../../../@core/models/eventolab.model';
import { RequestPromiseService } from '../../../../@shared/services/request-promise.service';
import { environment } from 'src/environments/environment';


class Eventlab {
  id: string;
  titulo: string ;
  subtitulo: string;
  horainicial: string ;
  horafinal: string;

  datainicial: string;
  datafinal: string;
  dias:number;
}

@Component({
  selector: 'app-evento-list',
  templateUrl: './evento-list.component.html',
  styleUrls: ['./evento-list.component.scss']
})
export class EventoListComponent implements OnInit {

  eventslab: Eventlab[] = [];
  itens: any[]=[];

  seachValue: string;

  constructor(
    private http: RequestPromiseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
     this.loadEventos(); 
  }

  showAlterarEvento(id: string)
  {
    this.router.navigate([`/alterarevento`], { queryParams: { id: id} } ) 
  }


  
  loadEventos() 
  { 
      this.http.get<Eventolab[]>(environment.services.api,environment.routes.eventoSebraeLab.root).
      then(x => { this.fillEventos( x )
                   //.sort(function (a, b) 
              //{
             //   return (a.dateStart > b.dateStart) ?1:(a.dateStart < b.dateStart)?-1:0;
             // }); 
             });
  }

  search( value: string )
  {
    if ( value ==='')
       this.loadEventos()
    else
    this.http.get<any[]>(environment.services.api,
                      `${environment.routes.eventoSebraeLab.search}${value}`).
      then(x => {  this.fillEventos( x ) });
  }

  fillEventos( eventos: Eventolab[])
  {
    this.itens=[];
    eventos.forEach( e=>{           

      let startEvent: any = e.dias[0];//primeiro evento
      let endEvent: any = e.dias[e.dias.length - 1];//ultimo evnto               
      let startDay : string = startEvent?.data;//data inicial
      let endDay: string = endEvent?.data;//data final   
      
      let days: string="";
      e.dias.forEach(d => days += String(d.data).substring(8,10)+'/' );

      this.itens.push({ id:e.id,
                        titulo: e.titulo,
                        subtitulo:e.subtitulo, 
                        horainicial: startEvent?.horainicio ,
                        horafinal: endEvent?.horafim, 
                        data: startDay,
                        datainicial:  startDay?.substring(8,10), //primeiro dia
                        datafinal: endDay?.substring(8,10), //ultimo dia
                        dias: e.dias.length,
                      });
      });              
            
     this.eventslab = this.itens;
  }

  getMonthDescription(data:any)
  { 
    const Meses = ['Janeiro','Fevereiro','Maço','Abril','Maio','Junho','Julio',
                    'Agosto','Setembro','Outubro','Novembro','Dezembro'];

    return Meses[new Date(data).getMonth()]
  }



}
