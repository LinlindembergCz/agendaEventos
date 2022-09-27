import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AgendaRountingModule } from '../../agenda-routing.module';
import { EventoEditComponent } from './evento-edit.component';
import { NgPrimeExportsModule } from '../../../../@bootstrap/scripts/ngprime.exports';

import { FooterModule } from '../../../../@layout/footer/footer.module';
import { HeaderModule } from '../../../../@layout/header/header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [EventoEditComponent 
    ],
    exports: [EventoEditComponent],
  imports: [
    CommonModule,
    NgPrimeExportsModule,
    AgendaRountingModule,
    FooterModule,
    HeaderModule,
    ReactiveFormsModule,
    FormsModule,
    
        
  ],
  providers: []
})
export class EventoEditModule { }
