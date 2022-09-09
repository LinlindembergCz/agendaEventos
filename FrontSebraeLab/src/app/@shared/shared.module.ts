import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PolygonAnimateComponent } from './components/layout/polygon-animate/polygon-animate.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageErrorComponent } from './components/templates/page-error/page-error.component';
import { InternalServerErrorComponent } from './pages/internal-server-error/internal-server-error.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { ModalComponent } from './components/extends/modal/modal.component';
import { ModalService } from './components/extends/modal/modal.service';
import { ProfileComponent } from './components/templates/profile/profile.component';
import { PasswordComponent } from './components/templates/password/password.component';
import { NgPrimeExportsModule } from '../@bootstrap/scripts/ngprime.exports';
import { CommonExportsModule } from '../@bootstrap/scripts/common.exports';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RequestPromiseService } from './services/request-promise.service';
import { PhotoUploadComponent } from './components/extends/photo-upload/photo-upload.component';
import { PhotoInputPreviewComponent } from './components/templates/photo-input-preview/photo-input-preview.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    InternalServerErrorComponent,
    MaintenanceComponent,
    PolygonAnimateComponent,
    PageErrorComponent,
    ModalComponent,
    ProfileComponent,
    PasswordComponent,
    PhotoUploadComponent,
    PhotoInputPreviewComponent
  ],
  exports: [
    ModalComponent,
    ProfileComponent,
    PasswordComponent,
    PhotoInputPreviewComponent,
    PhotoUploadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgPrimeExportsModule
  ],
  providers: [
    ModalService,
    RequestPromiseService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class SharedModule { }
