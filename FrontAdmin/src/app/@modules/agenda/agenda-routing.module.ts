import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './agenda.component';
import { EventoCreateComponent } from './components/evento-create/evento-create.component';
import { EventoEditComponent } from './components/evento-edit/evento-edit.component';
import { EventoViewComponent } from './components/evento-view/evento-view.component';

const routes: Routes = [
    {
      path: 'index',
      component: AgendaComponent,
    },
    {
      path: 'novoevento',
      component: EventoCreateComponent,
    },
    {
      path: 'alterarevento',
      component: EventoEditComponent,
    },    
    {
      path: 'visualizarevento',
      component: EventoViewComponent,
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
export class AgendaRountingModule { }
