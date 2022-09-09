import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalendarioEditComponent } from '../../calendario-edit/calendario-edit.component';
import { EventBooking } from '../model/EventBooking-model';

@Component({
  selector: 'app-eventdate-show',
  templateUrl: '../../calendario-edit/calendario-edit.component.html',
  styleUrls: ['../../calendario-edit/calendario-edit.component.scss']
})
export class EventDateComponent extends CalendarioEditComponent implements OnInit {
        
  optionDate: string;

  @Output() clickHide = new EventEmitter<void>();

  @Output() clickReserve = new EventEmitter<EventBooking>();
  
  ngOnInit(): void {   
  }
  public Apply() {

      this.eventBooking.Options=[];
      this.eventBooking.HoursStart=[];
      this.eventBooking.HoursEnd=[];

      this.periodos.forEach( p=> {
        this.eventBooking.Options.push(p.option);
        this.eventBooking.HoursStart.push(p.horaInicio);
        this.eventBooking.HoursEnd.push(p.horaFim);
      })
      this.clickReserve.next(this.eventBooking);
      this.clickHide.next(); 
  }



}
