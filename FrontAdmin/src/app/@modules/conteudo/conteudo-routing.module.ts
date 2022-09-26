import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConteudoComponent } from './conteudo.component';
import { PublicacaoCreateComponent } from './components/publicacao-create/puclicacao-create.component';
import { PublicacaoEditComponent } from './components/publicacao-edit/publicacao-edit.component';



const routes: Routes = [
    {
      path: 'index',
      component: ConteudoComponent,
    },
    {
      path: 'novopublicacao',
      component: PublicacaoCreateComponent,
    },
    {
      path: 'alterarpublicacao',
      component: PublicacaoEditComponent,
    },

 ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class ConteudoRountingModule { }
