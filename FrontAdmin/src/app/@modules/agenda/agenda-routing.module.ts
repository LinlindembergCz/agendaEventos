import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './agenda.component';
import { EventoCreateComponent } from './components/evento-create/evento-create.component';


const routes: Routes = [
    {
      path: 'index',
      component: AgendaComponent,
    },
    {
      path: 'novoevento',
      component: EventoCreateComponent,
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
export class AgendaRountingModule { }
