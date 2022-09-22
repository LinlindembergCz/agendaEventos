import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './pages/index/index.component';
import { HomeRountingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgPrimeExportsModule } from 'src/app/@bootstrap/scripts/ngprime.exports';
import { CalendarioEditModule } from '../components/calendario-edit/calendario-edit.module'; 
import { BannersShowModule } from '../components/banners-show/banners-show.module'; 
import { FooterModule } from '../../@layout/footer/footer.module';
import { HeaderModule } from '../../@layout/header/header.module';
import { NgxCaptchaModule } from 'ngx-captcha';
import { CommonExportsModule } from 'src/app/@bootstrap/scripts/common.exports';
import { ProximosEventosShowModule } from '../components/proximo-eventos-show/proximos-eventos-show.module';


@NgModule({
  declarations: [IndexComponent ],
  imports: [
    ProximosEventosShowModule,
    BannersShowModule,
    CalendarioEditModule,
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
