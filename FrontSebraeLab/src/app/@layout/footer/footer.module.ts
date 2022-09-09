
import ptBR from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { NgModule } from '@angular/core';
import {FooterComponent } from './footer.component';

registerLocaleData(ptBR);

@NgModule({
  declarations: [FooterComponent],
  exports: [FooterComponent],
  imports: [

  ],
  providers: [],

  bootstrap: []
})
export class FooterModule { }
