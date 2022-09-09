import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './pages/index/index.component';
import { HomeRountingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgPrimeExportsModule } from 'src/app/@bootstrap/scripts/ngprime.exports';
import { BannersShowComponent } from '../components/banners-show/banners-show.component';
import { SebraelabShowComponent } from '../components/sebraelab-show/sebraelab-show.component';
import { ConteudoShowComponent } from '../components/conteudo-show/conteudo-show.component';
import { EventoslabShowComponent } from '../components/eventoslab-show/eventoslab-show.component';
import { ReserveSubmitComponent } from '../components/reserve-submit/reserve-submit.component';
import { EventDateComponent } from '../components/reserve-submit/components/eventDate-show.component'; 
import { CalendarioEditModule } from '../components/calendario-edit/calendario-edit.module'; 
import { BannersShowModule } from '../components/banners-show/banners-show.module'; 


import { FooterModule } from '../../@layout/footer/footer.module';
import { HeaderModule } from '../../@layout/header/header.module';

import { NgxCaptchaModule } from 'ngx-captcha';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { FieldsetModule } from 'primeng/fieldset';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {DividerModule} from 'primeng/divider';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { DialogModule } from 'primeng/dialog';
import {RadioButtonModule} from 'primeng/radiobutton';
import { ContatoSubmitModule } from '../components/contato-submit/contato-submit.module';
import { EcoSistemaShowModule } from '../components/ecosistema-show/ecosistema-show.module';

import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { CheckboxModule } from 'primeng/checkbox';


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

    CardModule,
    RatingModule,
    FieldsetModule,
    DataViewModule,
    ButtonModule,
    DividerModule,
    CalendarModule,
    InputTextModule,
    InputNumberModule,
    InputMaskModule, 
    FooterModule,
    HeaderModule,
    DialogModule,
    RadioButtonModule,
    VirtualScrollerModule,
    CheckboxModule   
  ],
  providers: []
})
export class HomeModule { }
