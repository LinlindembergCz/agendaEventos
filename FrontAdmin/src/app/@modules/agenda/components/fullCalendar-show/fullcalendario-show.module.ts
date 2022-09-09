import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import { NgPrimeExportsModule } from '../../../../@bootstrap/scripts/ngprime.exports';
import { AgendaRountingModule } from '../../agenda-routing.module';
import { FullCalendarioShowComponent } from './fullcalendario-show.component';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [FullCalendarioShowComponent 
    ],
    exports: [FullCalendarioShowComponent],
  imports: [
    FullCalendarModule,
    NgPrimeExportsModule,
    AgendaRountingModule

    
  ],
  providers: []
})
export class FullCalendarioShowModule { }
