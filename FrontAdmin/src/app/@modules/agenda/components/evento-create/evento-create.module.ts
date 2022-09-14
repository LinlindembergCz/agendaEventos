import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import { AgendaRountingModule } from '../../agenda-routing.module';
import { EventoCreateComponent } from './evento-create.component';
import { NgPrimeExportsModule } from '../../../../@bootstrap/scripts/ngprime.exports';

import { FooterModule } from '../../../../@layout/footer/footer.module';
import { HeaderModule } from '../../../../@layout/header/header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CalendarioEditModule } from '../../../components/calendario-edit/calendario-edit.module';
import { HttpClientModule } from '@angular/common/http';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [EventoCreateComponent 
    ],
    exports: [EventoCreateComponent],
  imports: [
    CommonModule,
    FullCalendarModule,
    NgPrimeExportsModule,
    AgendaRountingModule,
    FooterModule,
    HeaderModule,
    ReactiveFormsModule,
    FormsModule,
        
  ],
  providers: []
})
export class EventoCreateModule { }
