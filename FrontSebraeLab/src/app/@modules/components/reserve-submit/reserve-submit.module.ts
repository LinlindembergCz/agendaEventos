import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppDialogModule } from '../../../@shared/components/dialogs/dialog.module';
import { NgxCaptchaModule } from 'ngx-captcha';
import {ReserveSubmitComponent} from '../reserve-submit/reserve-submit.component';
import { NgPrimeExportsModule } from '../../../@bootstrap/scripts/ngprime.exports';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';


@NgModule({
  declarations: [ReserveSubmitComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    AppDialogModule,
    NgPrimeExportsModule, 
    MessagesModule,
    MessageModule
    
  ],
  providers: []
})
export class ReserveSubmitModule { }
