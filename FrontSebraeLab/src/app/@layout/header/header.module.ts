
import ptBR from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { NgModule } from '@angular/core';
import {HeaderComponent } from './header.component';
import { NgPrimeExportsModule } from '../../@bootstrap/scripts/ngprime.exports';
import {TieredMenuModule} from 'primeng/tieredmenu';

registerLocaleData(ptBR);

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    NgPrimeExportsModule,
    TieredMenuModule


  ],
  providers: [],

  bootstrap: []
})
export class HeaderModule { }
