import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './@bootstrap/security/auth.guard';
import { BlankComponent } from './@layout/blank/blank.component';
import { LayoutComponent } from './@layout/layout.component';
import { ContatoComponent } from './@modules/contato/contato.component';
import { EBookComponent } from './@modules/conteudo/ebook/ebook.component';
import { EditaisComponent } from './@modules/conteudo/editais/editais.component';
import { NoticiasComponent } from './@modules/conteudo/noticias/noticias.component';
import { OutrosComponent } from './@modules/conteudo/outros/outros.component';
import { EventosComponent } from './@modules/eventos/eventos.component';
import { MeuEventoComponent } from './@modules/meuevento/meuevento.component';
import { QuemSomosComponent } from './@modules/quemsomos/quemsomos.component';

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
    path: 'contato',
    component: ContatoComponent,
    loadChildren: () => import('./@modules/contato/contato.module').then(m => m.ContatoModule)
  }
  ,
  {
    path: 'eventos',
    component: EventosComponent,
    loadChildren: () => import('./@modules/eventos/eventos.module').then(m => m.EventosModule)
  },
  {
    path: 'ebook',
    component: EBookComponent,
    loadChildren: () => import('./@modules/conteudo/ebook/ebook.module').then(m => m.EBookModule)
  },
  {
    path: 'editais',
    component: EditaisComponent,
    loadChildren: () => import('./@modules/conteudo/editais/editais.module').then(m => m.EditaisModule)
  },
  {
    path: 'noticias',
    component: NoticiasComponent,
    loadChildren: () => import('./@modules/conteudo/noticias/noticias.module').then(m => m.NoticiasModule)
  }, 
  {
    path: 'outros',
    component: OutrosComponent,
    loadChildren: () => import('./@modules/conteudo/outros/outros.module').then(m => m.OutrosModule)
  },
  {
    path: 'quemsomos',
    component: QuemSomosComponent,
    loadChildren: () => import('./@modules/quemsomos/quemsomos.module').then(m => m.QuemSomosModule)
  },
  {
    path: 'meuevento',
    component: MeuEventoComponent,
    loadChildren: () => import('./@modules/meuevento/meuevento.module').then(m => m.MeuEventoModule)
  },  
  {
    path: 'meuevento?:datas',
    loadChildren: () => import('./@modules/meuevento/meuevento.module').then(m => m.MeuEventoModule)
  },
  {
    path: 'user',
    component: LayoutComponent,
    loadChildren: () => import('./@modules/user/user.module').then(m => m.ProfileModule)
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
