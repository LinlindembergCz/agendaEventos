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
import { ContatoComponent } from './contato.component';
import { BannersShowModule } from '../home/banners-show/banners-show.module';
import { NgPrimeExportsModule } from 'src/app/@bootstrap/scripts/ngprime.exports';

@NgModule({
  declarations: [ContatoComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    NgPrimeExportsModule, 
    HeaderModule,
  
    
  ],
  providers: []
})
export class ContatoModule { }
