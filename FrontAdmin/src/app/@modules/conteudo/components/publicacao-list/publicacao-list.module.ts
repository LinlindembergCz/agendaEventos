import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FooterModule } from '../../../../@layout/footer/footer.module';
import { HeaderModule } from '../../../../@layout/header/header.module';

import { BannersShowModule } from '../../../components/banners-show/banners-show.module';

import { DataViewModule } from 'primeng/dataview';
import { PublicacaoListComponent } from './publicacao-list.component';
import { NgPrimeExportsModule } from '../../../../@bootstrap/scripts/ngprime.exports';

@NgModule({
  declarations: [PublicacaoListComponent
    ],
    exports: [PublicacaoListComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FooterModule,
    HeaderModule,
    BannersShowModule,
    NgPrimeExportsModule,
    DataViewModule,
  ],
  providers: []
})
export class PublicacaoListModule { }
