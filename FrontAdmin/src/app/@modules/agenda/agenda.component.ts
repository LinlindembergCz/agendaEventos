import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { RequestPromiseService } from 'src/app/@shared/services/request-promise.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };

  constructor(
    private http: RequestPromiseService,
    private router: Router
    
    ){}

  ngOnInit(): void {
    

  }

  //OpenNovoEvento()
  //{
  //  this.router.navigate(['/novoevento']);
  //}

}
