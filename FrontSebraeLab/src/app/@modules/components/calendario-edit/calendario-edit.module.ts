import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import {CalendarioEditComponent} from './calendario-edit.component';
import { FooterModule } from '../../../@layout/footer/footer.module';
import { NgPrimeExportsModule } from '../../../@bootstrap/scripts/ngprime.exports';

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
    //HeaderModule,
    
 

    
  ],
  providers: []
})
export class CalendarioEditModule { }
