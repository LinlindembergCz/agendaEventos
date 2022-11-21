
import ptBR from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { NgModule } from '@angular/core';
import {HeaderComponent } from './header.component';
import { NgPrimeExportsModule } from 'src/app/@bootstrap/scripts/ngprime.exports';

registerLocaleData(ptBR);

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [NgPrimeExportsModule,

  ],
  providers: [],

  bootstrap: []
})
export class HeaderModule { }
