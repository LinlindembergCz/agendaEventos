import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './pages/index/index.component';
import { HomeRountingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgPrimeExportsModule } from 'src/app/@bootstrap/scripts/ngprime.exports';
import { SebraelabShowComponent } from '../components/sebraelab-show/sebraelab-show.component';
import { ConteudoShowComponent } from '../components/conteudo-show/conteudo-show.component';
import { EventoslabShowComponent } from '../components/eventoslab-show/eventoslab-show.component';
import { ReserveSubmitComponent } from '../components/reserve-submit/reserve-submit.component';
import { EventDateComponent } from '../components/reserve-submit/components/eventDate-show.component'; 
import { CalendarioEditModule } from '../components/calendario-edit/calendario-edit.module'; 
import { BannersShowModule } from './banners-show/banners-show.module'; 


import { FooterModule } from '../../@layout/footer/footer.module';
import { HeaderModule } from '../../@layout/header/header.module';

import { NgxCaptchaModule } from 'ngx-captcha';

import { ContatoSubmitModule } from '../components/contato-submit/contato-submit.module';
import { EcoSistemaShowModule } from '../components/ecosistema-show/ecosistema-show.module';




@NgModule({
  declarations: [IndexComponent, 
     SebraelabShowComponent, ConteudoShowComponent,
     EventoslabShowComponent, ReserveSubmitComponent,
     EventDateComponent,
    ],
  imports: [
    BannersShowModule,
    CalendarioEditModule,
    EcoSistemaShowModule,
    ContatoSubmitModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgPrimeExportsModule,
    HomeRountingModule,    
    NgxCaptchaModule,
    FooterModule,
    HeaderModule,      
  ],
  providers: []
})
export class HomeModule { }
