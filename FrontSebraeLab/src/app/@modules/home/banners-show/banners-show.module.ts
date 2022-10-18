import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannersShowComponent } from './banners-show.component';
import { NgxCaptchaModule } from 'ngx-captcha';

import { FooterModule } from '../../../@layout/footer/footer.module';
import { CarouselModule } from 'primeng/carousel';



@NgModule({
  declarations: [BannersShowComponent
    ],
    exports: [BannersShowComponent],
  imports: [
    FooterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    CarouselModule,

    
  ],
  providers: []
})
export class BannersShowModule { }
