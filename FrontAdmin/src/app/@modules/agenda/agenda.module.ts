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
import { EventoEditComponent } from './components/evento-edit/evento-edit.component';
import { CalendarioEditModule } from '../components/calendario-edit/calendario-edit.module';
import { SharedModule } from 'src/app/@shared/shared.module';

@NgModule({
  declarations: [AgendaComponent, EventoCreateComponent, EventoEditComponent
    ],
    exports: [EventoCreateComponent, EventoEditComponent],
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
    CalendarioEditModule,
    SharedModule
  ],
  providers: []
})
export class AgendaModule { }
