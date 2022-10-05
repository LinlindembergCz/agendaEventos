import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './pages/index/index.component';
import { HomeRountingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgPrimeExportsModule } from '../../@bootstrap/scripts/ngprime.exports';
import { BannersShowModule } from '../components/banners-show/banners-show.module'; 
import { FooterModule } from '../../@layout/footer/footer.module';
import { HeaderModule } from '../../@layout/header/header.module';
import { NgxCaptchaModule } from 'ngx-captcha';
import { CommonExportsModule } from '../../@bootstrap/scripts/common.exports';
import { EventoListModule } from '../agenda/components/evento-list/evento-list.module';
import { PublicacaoListModule } from '../../@modules/conteudo/components/publicacao-list/publicacao-list.module';


@NgModule({
  declarations: [IndexComponent ],
  imports: [
    EventoListModule,
    PublicacaoListModule,
    BannersShowModule,
    CommonModule,
    CommonExportsModule,
    FormsModule,
    ReactiveFormsModule,
    NgPrimeExportsModule,
    HomeRountingModule,    
    NgxCaptchaModule,
    FooterModule,
    HeaderModule,

  ],
  providers: []
})
export class HomeModule { }
