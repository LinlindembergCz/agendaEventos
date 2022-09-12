import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { EventBooking } from '../reserve-submit/model/EventBooking-model';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { RequestPromiseService } from 'src/app/@shared/services/request-promise.service';
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

    


    OpenNovoEvento()
    {
      this.router.navigate(['/novoevento']);
    }

    ngOnInit(): void {   


      let eventos :any = this.service.getEvents();
      


      this.options = {  height: '550px',         
                      
                      //initialDate : '2022-01-01',
                      headerToolbar: {left: 'prev,next,today',
                                      center: 'title',
                                      right: 'dayGridMonth,timeGridWeek,timeGridDay'},
                      editable: false,
                      selectable:true,
                      selectMirror: true,
                      dayMaxEvents: true,
                      locale:['pt-BR'],
                      events: [
                        {
                           
                          title: "13:00 - 15:00",
                          date: "2022-09-01",
                          color: "yellow"
                        },
                        {
                           
                          title: "15:30 - 17:00",
                          date: "2022-09-01",
                          color: "green"
                        },
                        
                        {
                             
                          title: "13:00 - 17:00",
                          date: "2022-09-02",
                          textColor: "pink"
                        },
                        {
                            
                          title: "08:00 - 12:00",
                          date: "2022-09-07"
                        }]
                      
                    };


  }




}
