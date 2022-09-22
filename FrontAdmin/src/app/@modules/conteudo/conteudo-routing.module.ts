import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConteudoComponent } from './conteudo.component';



const routes: Routes = [
    {
      path: 'index',
      component: ConteudoComponent,
    }

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
