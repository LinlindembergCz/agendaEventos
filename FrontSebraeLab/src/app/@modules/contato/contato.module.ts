import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FooterModule } from '../../@layout/footer/footer.module';
import { HeaderModule } from '../../@layout/header/header.module';

import { NgxCaptchaModule } from 'ngx-captcha';
import { ContatoComponent } from './contato.component';
import { NgPrimeExportsModule } from '../../@bootstrap/scripts/ngprime.exports';
@NgModule({
  declarations: [ContatoComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    NgPrimeExportsModule, 
    HeaderModule,
  
    
  ],
  providers: []
})
export class ContatoModule { }
