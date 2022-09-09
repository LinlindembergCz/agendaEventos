import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import {CalendarioEditComponent} from './calendario-edit.component';

import { FooterModule } from '../../../@layout/footer/footer.module';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { HeaderModule } from 'src/app/@layout/header/header.module';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [CalendarioEditComponent
    ],
    exports: [CalendarioEditComponent],
  imports: [
    FooterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    DataViewModule,
    ButtonModule,
    CalendarModule,
    InputTextModule,
    InputMaskModule, 
    FooterModule,
    HeaderModule,
    RadioButtonModule,
    CheckboxModule,
    VirtualScrollerModule

    
  ],
  providers: []
})
export class CalendarioEditModule { }
