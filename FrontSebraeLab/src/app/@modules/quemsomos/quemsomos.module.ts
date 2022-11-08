import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { FooterModule } from '../../@layout/footer/footer.module';
import { HeaderModule } from '../../@layout/header/header.module';

import { NgxCaptchaModule } from 'ngx-captcha';
import { QuemSomosComponent } from './quemsomos.component';
import { NaPraticaShowComponent} from './napratica-show/na-pratica-show.component';
import { EspacoShowComponent} from './espaco-show/espaco-show.component';
import { EntendaSebraelabShowComponent} from './entenda-sebraelab-show/entenda-sebraelab-show.component';
import  {ContatoSubmitModule} from '../components/contato-submit/contato-submit.module';
import  {EcoSistemaShowModule} from '../components/ecosistema-show/ecosistema-show.module';
import { BannersShowModule } from '../home/banners-show/banners-show.module';
import { EspacoFisicoShowComponent} from './espacofisico-show/espacofisico-show.component';
import { NgPrimeExportsModule } from '../../@bootstrap/scripts/ngprime.exports';
import { GalleriaModule } from 'primeng/galleria'; 
@NgModule({
  declarations: [QuemSomosComponent, NaPraticaShowComponent,
    EspacoShowComponent, EntendaSebraelabShowComponent, EspacoFisicoShowComponent
    ],
  imports: [
    BannersShowModule,
    EcoSistemaShowModule,
    ContatoSubmitModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    HeaderModule,
    NgPrimeExportsModule,
    GalleriaModule   

  ],
  providers: []
})
export class QuemSomosModule { }
