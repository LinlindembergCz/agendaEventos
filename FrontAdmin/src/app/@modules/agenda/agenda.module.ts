import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FooterModule } from '../../@layout/footer/footer.module';
import { HeaderModule } from '../../@layout/header/header.module';

import { AgendaComponent } from './agenda.component';
import { NgPrimeExportsModule } from '../../@bootstrap/scripts/ngprime.exports';
import { BannersShowModule } from '../components/banners-show/banners-show.module';
import { EventoListModule } from './components/evento-list/evento-list.module';
import { FullCalendarioShowModule } from './components/fullCalendar-show/fullcalendario-show.module';

import { AgendaRountingModule } from './agenda-routing.module';
import { EventoCreateComponent } from './components/evento-create/evento-create.component';
import { EventoEditComponent } from './components/evento-edit/evento-edit.component';
import { EventoViewComponent } from './components/evento-view/evento-view.component';
import { SharedModule } from 'src/app/@shared/shared.module';

@NgModule({
  declarations: [AgendaComponent, EventoCreateComponent, EventoEditComponent, EventoViewComponent 
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
    EventoListModule,
    FullCalendarioShowModule,
    SharedModule
  ],
  providers: []
})
export class AgendaModule { }
