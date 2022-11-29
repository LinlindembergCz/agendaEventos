import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterModule } from '../../../@layout/footer/footer.module';
import { HeaderModule } from '../../../@layout/header/header.module';
import { NgxCaptchaModule } from 'ngx-captcha';
import { PublicacoesComponent } from './publicacoes.component';
import { NgPrimeExportsModule } from '../../../@bootstrap/scripts/ngprime.exports';
import { NewsLetterModule } from '../newsletter/newletter.module';

@NgModule({
  declarations: [PublicacoesComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    NgPrimeExportsModule,
    HeaderModule,
    FooterModule,
    NewsLetterModule
   ],
  providers: []
})
export class PublicacoesModule { }
