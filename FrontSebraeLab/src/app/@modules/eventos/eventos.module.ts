import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { FooterModule } from '../../@layout/footer/footer.module';
import { HeaderModule } from '../../@layout/header/header.module';

import { NgxCaptchaModule } from 'ngx-captcha';
import { EventosComponent } from './eventos.component';
import { FullCalendarioShowModule } from './fullCalendar-show/fullcalendario-show.module';
import { NgPrimeExportsModule } from '../../@bootstrap/scripts/ngprime.exports';
import { SharedModule } from '../../@shared/shared.module';



@NgModule({
  declarations: [EventosComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    NgPrimeExportsModule,
    HeaderModule,  
    FullCalendarioShowModule,
    SharedModule    
  ],
  providers: []
})
export class EventosModule { }
