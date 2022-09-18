import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './agenda.component';
import { EventoCreateComponent } from './components/evento-create/evento-create.component';
import { EventoEditComponent } from './components/evento-edit/evento-edit.component';
import { EventService } from './components/fullCalendar-show/Events-service.component';


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

 ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [EventService]
})
export class AgendaRountingModule { }
