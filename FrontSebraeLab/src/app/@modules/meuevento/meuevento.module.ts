import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../../@layout/header/header.module';
import { FooterModule } from '../../@layout/footer/footer.module';
import { NgxCaptchaModule } from 'ngx-captcha';
import { MeuEventoComponent } from './meuevento.component';
import { EventoSubmit } from './evento-submit/evento-submit.component';
import { FuncionamentoShow } from './funcionamento-show/funcionamento-show.component';
import { CalendarioEditModule } from '../components/calendario-edit/calendario-edit.module'; 
import { BannersShowModule } from '../home/banners-show/banners-show.module';
import { AppDialogModule } from '../../@shared/components/dialogs/dialog.module';
import { NgPrimeExportsModule } from '../../@bootstrap/scripts/ngprime.exports';
import { ContatoSubmitModule } from '../components/contato-submit/contato-submit.module';


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
    HeaderModule, 
    FooterModule,
    AppDialogModule,
    ContatoSubmitModule,
    
  ],
  providers: []
})
export class MeuEventoModule { }
