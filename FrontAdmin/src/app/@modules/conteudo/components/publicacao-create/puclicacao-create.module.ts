import { NgModule } from '@angular/core';

import { FullCalendarModule } from '@fullcalendar/angular';
import { ConteudoRountingModule } from '../../conteudo-routing.module';
import { PublicacaoCreateComponent } from './puclicacao-create.component';
import { NgPrimeExportsModule } from '../../../../@bootstrap/scripts/ngprime.exports';

import { FooterModule } from '../../../../@layout/footer/footer.module';
import { HeaderModule } from '../../../../@layout/header/header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {EditorModule} from 'primeng/editor';

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
