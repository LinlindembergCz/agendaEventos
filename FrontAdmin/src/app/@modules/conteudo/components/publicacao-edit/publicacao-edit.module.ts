import { NgModule } from '@angular/core';

import { FullCalendarModule } from '@fullcalendar/angular';
import { ConteudoRountingModule } from '../../conteudo-routing.module';
import { PublicacaoEditComponent } from './publicacao-edit.component';
import { NgPrimeExportsModule } from '../../../../@bootstrap/scripts/ngprime.exports';

import { FooterModule } from '../../../../@layout/footer/footer.module';
import { HeaderModule } from '../../../../@layout/header/header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [PublicacaoEditComponent 
    ],
    exports: [PublicacaoEditComponent],
  imports: [
    CommonModule,
    FullCalendarModule,
    NgPrimeExportsModule,
    ConteudoRountingModule,
    FooterModule,
    HeaderModule,
    ReactiveFormsModule,
    FormsModule,   
        
  ],
  providers: []
})
export class PublicacaoEditModule { }
