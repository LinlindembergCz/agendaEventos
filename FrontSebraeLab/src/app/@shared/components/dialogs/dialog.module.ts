import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipModule } from 'primeng/tooltip';
import { DialogComponent } from './dialog.component';
import { DialogModule } from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';


@NgModule({
  declarations: [
    DialogComponent

  ],
  imports: [
    CommonModule,
    TooltipModule,
    DialogModule,
    ButtonModule,
    PanelModule
  ],
  providers: [
    DialogComponent
  ],
  exports: [
    DialogComponent
  ]
})
export class AppDialogModule { }
