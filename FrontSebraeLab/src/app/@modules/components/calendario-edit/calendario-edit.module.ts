import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import {CalendarioEditComponent} from './calendario-edit.component';
import { FooterModule } from '../../../@layout/footer/footer.module';
import { HeaderModule } from 'src/app/@layout/header/header.module';
import { NgPrimeExportsModule } from 'src/app/@bootstrap/scripts/ngprime.exports';

@NgModule({
  declarations: [CalendarioEditComponent
    ],
    exports: [CalendarioEditComponent],
  imports: [
    FooterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    NgPrimeExportsModule, 
    FooterModule,
    HeaderModule,
    
 

    
  ],
  providers: []
})
export class CalendarioEditModule { }
