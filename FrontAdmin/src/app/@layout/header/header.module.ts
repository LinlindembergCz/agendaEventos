
import ptBR from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { NgModule } from '@angular/core';
import {HeaderComponent } from './header.component';

registerLocaleData(ptBR);

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [

  ],
  providers: [],

  bootstrap: []
})
export class HeaderModule { }
