import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import {EcosistemaShowComponent} from './ecosistema-show.component';

import { FooterModule } from '../../../@layout/footer/footer.module';



@NgModule({
  declarations: [EcosistemaShowComponent
    ],
    exports: [EcosistemaShowComponent],
  imports: [
    FooterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,    
  ],
  providers: []
})
export class EcoSistemaShowModule { }
