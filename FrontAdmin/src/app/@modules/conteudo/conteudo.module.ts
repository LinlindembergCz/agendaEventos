import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FooterModule } from '../../@layout/footer/footer.module';
import { HeaderModule } from '../../@layout/header/header.module';

import { NgPrimeExportsModule } from '../../@bootstrap/scripts/ngprime.exports';
import { ConteudoComponent } from './conteudo.component';
import { BannersShowModule } from '../components/banners-show/banners-show.module';
import { ConteudoRountingModule } from './conteudo-routing.module';
import { PublicacaoCreateComponent } from './components/publicacao-create/puclicacao-create.component';
import { PublicacaoEditComponent } from './components/publicacao-edit/publicacao-edit.component';
import { PublicacaoViewComponent } from './components/publicacao-view/publicacao-view.component';
import { SharedModule } from '../../@shared/shared.module';
@NgModule({
  declarations: [ConteudoComponent, PublicacaoCreateComponent, PublicacaoEditComponent, PublicacaoViewComponent ],
    exports: [PublicacaoCreateComponent, PublicacaoEditComponent],
  imports: [
    ConteudoRountingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FooterModule,
    HeaderModule,
    NgPrimeExportsModule,
    BannersShowModule,
    SharedModule  

  ],
  providers: []
})
export class ConteudoModule { }
