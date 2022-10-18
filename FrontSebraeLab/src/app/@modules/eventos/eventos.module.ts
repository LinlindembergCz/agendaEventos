import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { FooterModule } from '../../@layout/footer/footer.module';
import { HeaderModule } from '../../@layout/header/header.module';

import { NgxCaptchaModule } from 'ngx-captcha';
import { EventosComponent } from './eventos.component';
import { BannersShowModule } from '../home/banners-show/banners-show.module';
import { FullCalendarioShowModule } from './fullCalendar-show/fullcalendario-show.module';
import { NgPrimeExportsModule } from 'src/app/@bootstrap/scripts/ngprime.exports';



@NgModule({
  declarations: [EventosComponent
    ],
  imports: [
    BannersShowModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    NgPrimeExportsModule,
    FooterModule,
    HeaderModule,  
    FullCalendarioShowModule
    
  ],
  providers: []
})
export class EventosModule { }
