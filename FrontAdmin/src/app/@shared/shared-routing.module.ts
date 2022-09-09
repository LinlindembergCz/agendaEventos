import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternalServerErrorComponent } from './pages/internal-server-error/internal-server-error.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';

const routes: Routes = [
    {
      path: 'maintenance',
      component: MaintenanceComponent
    },
    {
      path: '50X',
      component: InternalServerErrorComponent
    },
    {
      path: '404',
      component: PageNotFoundComponent
    },
    {
      path: '**',
      redirectTo: '/404'
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
export class SharedRountingModule { }
