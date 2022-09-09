import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { FooterModule } from '../../@layout/footer/footer.module';
import { HeaderModule } from '../../@layout/header/header.module';

import { NgxCaptchaModule } from 'ngx-captcha';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { FieldsetModule } from 'primeng/fieldset';
import { DataViewModule} from 'primeng/dataview';
import { ButtonModule} from 'primeng/button';
import { DividerModule} from 'primeng/divider';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule} from 'primeng/radiobutton';
import {TimelineModule} from 'primeng/timeline';
import {DropdownModule} from 'primeng/dropdown';
import {VirtualScrollerModule} from 'primeng/virtualscroller';

import { MeuEventoComponent } from './meuevento.component';

import { EventoSubmit } from './evento-submit/evento-submit.component';
import { FuncionamentoShow } from './funcionamento-show/funcionamento-show.component';

import {AccordionModule} from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarioEditModule } from '../components/calendario-edit/calendario-edit.module'; 
import { MultiSelectModule } from 'primeng/multiselect';
import { BannersShowModule } from '../components/banners-show/banners-show.module';
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
    TimelineModule,
    AccordionModule,
    DropdownModule,
    CheckboxModule,
    MultiSelectModule,
    
  ],
  providers: []
})
export class MeuEventoModule { }
