import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppDialogModule } from '../../../@shared/components/dialogs/dialog.module';
import { NgxCaptchaModule } from 'ngx-captcha';
import {ReserveSubmitComponent} from '../reserve-submit/reserve-submit.component';


@NgModule({
  declarations: [ReserveSubmitComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    AppDialogModule
    
  ],
  providers: []
})
export class ReserveSubmitModule { }
