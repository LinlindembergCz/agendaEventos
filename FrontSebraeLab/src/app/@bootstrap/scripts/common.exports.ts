import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/@shared/shared.module';
import { NgPrimeExportsModule } from './ngprime.exports';

@NgModule({
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        NgPrimeExportsModule,
        TranslateModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
})
export class CommonExportsModule {

}