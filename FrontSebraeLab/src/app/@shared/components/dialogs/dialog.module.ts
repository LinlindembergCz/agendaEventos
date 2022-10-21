import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipModule } from 'primeng/tooltip';
import { DialogComponent } from './dialog.component';
import { DialogModule } from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import { NgPrimeExportsModule } from 'src/app/@bootstrap/scripts/ngprime.exports';


@NgModule({
  declarations: [
    DialogComponent

  ],
  imports: [
    CommonModule,
    TooltipModule,
    DialogModule,
    ButtonModule,
    PanelModule,
    NgPrimeExportsModule, 

  ],
  providers: [
    DialogComponent
  ],
  exports: [
    DialogComponent
  ]
})
export class AppDialogModule { }
