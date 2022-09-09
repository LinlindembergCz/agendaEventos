import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContatoSubmitComponent } from './contato-submit.component';
import { NgxCaptchaModule } from 'ngx-captcha';

import { FooterModule } from '../../../@layout/footer/footer.module';



@NgModule({
  declarations: [ContatoSubmitComponent
    ],
    exports: [ContatoSubmitComponent],
  imports: [
    FooterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,

    
  ],
  providers: []
})
export class ContatoSubmitModule { }
