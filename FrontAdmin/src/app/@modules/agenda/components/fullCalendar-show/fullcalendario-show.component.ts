import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { EventBooking } from '../reserve-submit/model/EventBooking-model';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { Eventolab } from 'src/app/@core/models/eventolab.model';
import { RequestPromiseService } from 'src/app/@shared/services/request-promise.service';
import { environment } from 'src/environments/environment';
import { EventService } from './Events-service.component';

@Component({
  selector: 'app-fullcalendario-show',
  templateUrl: './fullcalendario-show.component.html',
  styleUrls: ['./fullcalendario-show.component.scss']
})
export class FullCalendarioShowComponent implements OnInit {
        
  @Input() events: any[];
  options: CalendarOptions = {
    initialView: 'dayGridMonth'
  };
  header: any;

  constructor(
    private http: RequestPromiseService,
    private router: Router,
    private service: EventService
    
    ){}

    


    ShowNovoEvento()
    {
      this.router.navigate(['/novoevento']);
    }

    ngOnInit(): void {   

      let eventos :any[]=[];
      const colors =["yellow", "green",  "blue", "red"]
      
      this.http.get<Eventolab[]>(environment.services.api,"EventoSebraeLab").then
      ( e=>{ 
               e.forEach( d=>{
                         d.dias.forEach( x=>{

                                  let data =  String(x.data).substring(0,10)
                                  eventos.push( {                           
                                    title: `${x.horainicio} - ${x.horafim}`,
                                    date: data,
                                    color: colors[Math.floor(Math.random() * (3 - 0 + 1) ) + 0]                                    
                                  })
                              })           
                      })
            }).finally(

              ()=>{

                this.options = {  height: '550px',         
                      
                      //initialDate : '2022-01-01',
                      headerToolbar: {left: 'prev,next,today',
                                      center: 'title',
                                      right: ''},
                      editable: false,
                      selectable:true,
                      selectMirror: true,
                      dayMaxEvents: true,
                      locale:['pt-BR'],
                      events: eventos                      
                    };
              }
            )

      


  }




}
