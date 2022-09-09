import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfilePageEditComponent } from './pages/edit/profile-page-edit.component';
import { ForgetedComponent } from './pages/fogerted/forgeted.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfilePageNewComponent } from './pages/new/profile-page-new.component';
import { ResetComponent } from './pages/reset/reset.component';
import { ProfilePageShowComponent } from './pages/show/profile-page-show.component';
import { TermsComponent } from './pages/terms/terms.component';


const routes: Routes = [
    {
      path: '',
      redirectTo: 'new',
      pathMatch: 'full'
    },
    {
      path: 'login',
      redirectTo: 'login',
      pathMatch: 'full'
    },
    {
      path: 'new',
      component: ProfilePageNewComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'forgeted',
      component: ForgetedComponent
    },
    {
      path:'terms',
      component: TermsComponent
    },
    {
      path: 'reset/:id/:code',
      component: ResetComponent
    },
    {
      path: 'show/:id',
      component: ProfilePageShowComponent
    },
    {
      path: 'edit/:id',
      component: ProfilePageEditComponent
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
export class ProfileRountingModule { }
