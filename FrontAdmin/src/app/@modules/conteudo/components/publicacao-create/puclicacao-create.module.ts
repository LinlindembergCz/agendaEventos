import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import { ConteudoRountingModule } from '../../conteudo-routing.module';
import { PublicacaoCreateComponent } from './puclicacao-create.component';
import { NgPrimeExportsModule } from '../../../../@bootstrap/scripts/ngprime.exports';

import { FooterModule } from '../../../../@layout/footer/footer.module';
import { HeaderModule } from '../../../../@layout/header/header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {EditorModule} from 'primeng/editor';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [PublicacaoCreateComponent],
    exports: [PublicacaoCreateComponent],
  imports: [
    CommonModule,
    FullCalendarModule,
    NgPrimeExportsModule,
    ConteudoRountingModule,
    FooterModule,
    HeaderModule,
    ReactiveFormsModule,
    FormsModule,
    EditorModule
    
  ],
  providers: []
})
export class PublicacaoCreateModule {

  
 }
