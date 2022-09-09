import { APP_BOOTSTRAP_LISTENER, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserIdleModule } from 'angular-user-idle';
import { TranslateModule } from '@ngx-translate/core';
import { UserIdleSettings, TranslateSettings } from './@bootstrap/scripts/global.const';
import { AuthGuard } from './@bootstrap/security/auth.guard';

import { BeforeLoaderProvider } from './@bootstrap/providers/before-loader.provider';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BootstrapModule } from './@bootstrap/bootstrap.module';
import { AuthInterceptor } from './@bootstrap/security/auth.interceptor';
import { MenuComponent } from './@layout/menu/menu.component';
import { LayoutComponent } from './@layout/layout.component';
import { BreadcrumpComponent } from './@layout/breadcrump/breadcrump.component';
import { ApplicationStateService } from './@bootstrap/services/application-state.service';
import { DEFAULT_CURRENCY_CODE } from '@angular/core';
import ptBR from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { BlankComponent } from './@layout/blank/blank.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


registerLocaleData(ptBR);

@NgModule({
  declarations: [
    AppComponent,
   // HeaderComponent,
    LayoutComponent,
    BreadcrumpComponent,
    BlankComponent,
    MenuComponent,
    //FooterComponent
  ],
  imports: [
    BootstrapModule,
    UserIdleModule.forRoot(UserIdleSettings()),
    TranslateModule.forRoot(TranslateSettings()),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    AuthGuard,
    {
      provide: APP_INITIALIZER,
      useFactory: BeforeLoaderProvider,
      deps: [ApplicationStateService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'},
    {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
