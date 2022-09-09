import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRountingModule } from './user-routing.module';
import { NgPrimeExportsModule } from '../../@bootstrap/scripts/ngprime.exports';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfilePageShowComponent } from './pages/show/profile-page-show.component';
import { ProfilePageNewComponent } from './pages/new/profile-page-new.component';
import { ProfilePageEditComponent } from './pages/edit/profile-page-edit.component';
import { ForgetedComponent } from './pages/fogerted/forgeted.component';
import { ResetComponent } from './pages/reset/reset.component';
import {LoginComponent} from './pages/login/login.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { PhotoUploadComponent } from 'src/app/@shared/components/extends/photo-upload/photo-upload.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { TermsComponent } from './pages/terms/terms.component';

@NgModule({
  declarations: [ProfilePageShowComponent, ProfilePageNewComponent, ProfilePageEditComponent,  LoginComponent, ForgetedComponent, ResetComponent, TermsComponent],
  imports: [
  CommonModule,
    NgPrimeExportsModule,
    ProfileRountingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxCaptchaModule
  ],
  exports: [TermsComponent, ProfilePageShowComponent, ProfilePageNewComponent, ProfilePageEditComponent,PhotoUploadComponent, ForgetedComponent, ResetComponent ],
  providers:[]
})
export class ProfileModule { }
