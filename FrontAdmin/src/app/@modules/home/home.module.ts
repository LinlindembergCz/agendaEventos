import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './pages/index/index.component';
import { HomeRountingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgPrimeExportsModule } from 'src/app/@bootstrap/scripts/ngprime.exports';
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
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonExportsModule } from 'src/app/@bootstrap/scripts/common.exports';


@NgModule({
  declarations: [IndexComponent ],
  imports: [
    BannersShowModule,
    CalendarioEditModule,
    CommonModule,
    CommonExportsModule,
    FormsModule,
    ReactiveFormsModule,
    NgPrimeExportsModule,
    HomeRountingModule,    
    NgxCaptchaModule,
    FooterModule,
    HeaderModule,
/*
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

    DialogModule,
    RadioButtonModule,
    VirtualScrollerModule,
    CheckboxModule */  
  ],
  providers: []
})
export class HomeModule { }
