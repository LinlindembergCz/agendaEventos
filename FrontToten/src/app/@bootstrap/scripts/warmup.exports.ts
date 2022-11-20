import { NgPrimeExportsModule } from './ngprime.exports';
import { CommonExportsModule } from './common.exports';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from '../../app-routing.module';
import { SharedRountingModule } from '../../@shared/export';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

@NgModule({
   exports: [
        CommonExportsModule,
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        SharedRountingModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
})

export class WarmupExportsModule {

}