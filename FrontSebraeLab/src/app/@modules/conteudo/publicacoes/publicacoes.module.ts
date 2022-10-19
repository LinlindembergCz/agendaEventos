import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterModule } from '../../../@layout/footer/footer.module';
import { HeaderModule } from '../../../@layout/header/header.module';
import { NgxCaptchaModule } from 'ngx-captcha';
import { PublicacoesComponent } from './publicacoes.component';
import { NgPrimeExportsModule } from 'src/app/@bootstrap/scripts/ngprime.exports';

@NgModule({
  declarations: [PublicacoesComponent
    ],
  imports: [
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
export class PublicacoesModule { }
