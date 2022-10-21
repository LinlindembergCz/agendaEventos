import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { FooterModule } from '../../@layout/footer/footer.module';
import { HeaderModule } from '../../@layout/header/header.module';
import { NgxCaptchaModule } from 'ngx-captcha';
import { MeuEventoComponent } from './meuevento.component';
import { EventoSubmit } from './evento-submit/evento-submit.component';
import { FuncionamentoShow } from './funcionamento-show/funcionamento-show.component';
import { CalendarioEditModule } from '../components/calendario-edit/calendario-edit.module'; 
import { BannersShowModule } from '../home/banners-show/banners-show.module';
import { AppDialogModule } from '../../@shared/components/dialogs/dialog.module';
import { NgPrimeExportsModule } from 'src/app/@bootstrap/scripts/ngprime.exports';

@NgModule({
  declarations: [MeuEventoComponent,EventoSubmit,
    FuncionamentoShow
    ],
  imports: [
    BannersShowModule,
    CalendarioEditModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    NgPrimeExportsModule, 
    FooterModule,
    HeaderModule, 
    AppDialogModule
    
  ],
  providers: []
})
export class MeuEventoModule { }
