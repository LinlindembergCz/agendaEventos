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
import { QuemSomosComponent } from './quemsomos.component';
import { NaPraticaShowComponent} from './napratica-show/na-pratica-show.component';
import { EspacoShowComponent} from './espaco-show/espaco-show.component';
import { EntendaSebraelabShowComponent} from './entenda-sebraelab-show/entenda-sebraelab-show.component';
import  {ContatoSubmitModule} from '../components/contato-submit/contato-submit.module';
import  {EcoSistemaShowModule} from '../components/ecosistema-show/ecosistema-show.module';
import { BannersShowModule } from '../components/banners-show/banners-show.module';

@NgModule({
  declarations: [QuemSomosComponent, NaPraticaShowComponent,
    EspacoShowComponent, EntendaSebraelabShowComponent
    ],
  imports: [
    BannersShowModule,
    EcoSistemaShowModule,
    ContatoSubmitModule,
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

 
    
  ],
  providers: []
})
export class QuemSomosModule { }
