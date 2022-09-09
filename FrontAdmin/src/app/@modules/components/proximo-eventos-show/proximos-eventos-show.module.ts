import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FooterModule } from '../../../@layout/footer/footer.module';
import { HeaderModule } from '../../../@layout/header/header.module';

import { ProximosEventosShowComponent } from './proximos-eventos-show.component';

import { BannersShowModule } from '../banners-show/banners-show.module';
import { NgPrimeExportsModule } from 'src/app/@bootstrap/scripts/ngprime.exports';
import { DataViewModule } from 'primeng/dataview';

@NgModule({
  declarations: [ProximosEventosShowComponent
    ],
    exports: [ProximosEventosShowComponent
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
export class ProximosEventosShowModule { }
