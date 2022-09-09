import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FooterModule } from '../../@layout/footer/footer.module';
import { HeaderModule } from '../../@layout/header/header.module';

import { AgendaComponent } from './agenda.component';
import { NgPrimeExportsModule } from 'src/app/@bootstrap/scripts/ngprime.exports';
import { BannersShowModule } from '../components/banners-show/banners-show.module';
import { ProximosEventosShowModule } from '../components/proximo-eventos-show/proximos-eventos-show.module';
import { FullCalendarioShowModule } from './components/fullCalendar-show/fullcalendario-show.module';

import { AgendaRountingModule } from './agenda-routing.module';
import { EventoCreateComponent } from './components/evento-create/evento-create.component';
import { FullCalendarioShowComponent } from './components/fullCalendar-show/fullcalendario-show.component';
import { CalendarioEditModule } from '../components/calendario-edit/calendario-edit.module';

@NgModule({
  declarations: [AgendaComponent, EventoCreateComponent
    ],
    exports: [EventoCreateComponent],
  imports: [
    AgendaRountingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FooterModule,
    HeaderModule,
    NgPrimeExportsModule,
    BannersShowModule,
    ProximosEventosShowModule,
    FullCalendarioShowModule,
    CalendarioEditModule
  ],
  providers: []
})
export class AgendaModule { }
