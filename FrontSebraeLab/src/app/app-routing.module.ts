import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { LayoutComponent } from './@layout/layout.component';
import { ContatoComponent } from './@modules/contato/contato.component';

import { PublicacoesComponent } from './@modules/conteudo/publicacoes/publicacoes.component';
import { EventosComponent } from './@modules/eventos/eventos.component';
import { MeuEventoComponent } from './@modules/meuevento/meuevento.component';
import { QuemSomosComponent } from './@modules/quemsomos/quemsomos.component';
import { PublicacaoViewComponent } from './@modules/conteudo/publicacao-view/publicacao-view.component';
import { EventoViewComponent } from './@modules/eventos/evento-view/evento-view.component';
import { NewsLetterComponent } from './@modules/conteudo/newsletter/newsletter.component';


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
    path: 'publicacoes',
    component: PublicacoesComponent,
    loadChildren: () => import('./@modules/conteudo/publicacoes/publicacoes.module').then(m => m.PublicacoesModule)
  }, 
  {
    path: 'publicacao',
    component: PublicacaoViewComponent,
    loadChildren: () => import('./@modules/conteudo/publicacao-view/publicacao-view.module').then(m => m.PublicacaoViewModule)
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
     path: 'contato',
     component: ContatoComponent,
     loadChildren: () => import('./@modules/contato/contato.module').then(m => m.ContatoModule)
   },
   {
    path: 'eventos',
    component: EventosComponent,
    loadChildren: () => import('./@modules/eventos/eventos.module').then(m => m.EventosModule)
  },
  {
    path: 'evento',
    component: EventoViewComponent,
    loadChildren: () => import('./@modules/eventos/evento-view/evento-view.module').then(m => m.EventoViewModule)
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
