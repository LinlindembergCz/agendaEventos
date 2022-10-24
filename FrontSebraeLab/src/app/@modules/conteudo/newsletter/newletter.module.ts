import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FooterModule } from '../../../@layout/footer/footer.module';
import { HeaderModule } from '../../../@layout/header/header.module';

import { BannersShowModule } from '../../home/banners-show/banners-show.module';

import { DataViewModule } from 'primeng/dataview';
import { NewsLetterComponent } from './newsletter.component';
import  { NgPrimeExportsModule } from '../../../@bootstrap/scripts/ngprime.exports';


@NgModule({
  declarations: [NewsLetterComponent
    ],
    exports: [NewsLetterComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,    
    HeaderModule,
    BannersShowModule,
    NgPrimeExportsModule,
    DataViewModule,
  ],
  providers: []
})
export class NewsLetterModule { }
