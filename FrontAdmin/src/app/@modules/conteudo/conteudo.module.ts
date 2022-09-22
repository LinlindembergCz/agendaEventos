import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FooterModule } from '../../@layout/footer/footer.module';
import { HeaderModule } from '../../@layout/header/header.module';

import { NgPrimeExportsModule } from '../../@bootstrap/scripts/ngprime.exports';
import { ConteudoComponent } from './conteudo.component';
import { BannersShowModule } from '../components/banners-show/banners-show.module';


@NgModule({
  declarations: [ConteudoComponent
    ],
    exports: [ConteudoComponent],
  imports: [

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FooterModule,
    HeaderModule,
    NgPrimeExportsModule,
    BannersShowModule,

  ],
  providers: []
})
export class ConteudoModule { }
