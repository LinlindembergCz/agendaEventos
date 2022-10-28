import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './@layout/layout.component';
import { AgendaComponent } from './@modules/agenda/agenda.component';
import { ConteudoComponent } from './@modules/conteudo/conteudo.component';
import { LoginComponent } from './@modules/user/pages/login/login.component';


const routes: Routes = [
   {
     path: '',
     component: LayoutComponent,
     loadChildren: () => import('./@modules/home/home.module').then(m => m.HomeModule)
   },
  {
      path: '',
      redirectTo: '',
      pathMatch: 'full'
  },
  {
    path: 'agenda',
    component: AgendaComponent,
    loadChildren: () => import('./@modules/agenda/agenda.module').then(m => m.AgendaModule)
  }, 
  {
    path: 'conteudo',
    component: ConteudoComponent,
    loadChildren: () => import('./@modules/conteudo/conteudo.module').then(m => m.ConteudoModule)
  }, 
 {
    path: 'login',
    component: LoginComponent,
    loadChildren: () => import('./@modules/user/user.module').then(m => m.UserModule)
  },  
  {
    path: 'user',
    component: LayoutComponent,
    loadChildren: () => import('./@modules/user/user.module').then(m => m.UserModule)
  }

];


const config: ExtraOptions = {
  useHash: false,
  enableTracing: false,
  onSameUrlNavigation: 'reload'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
  providers: []
})


export class AppRoutingModule { }
