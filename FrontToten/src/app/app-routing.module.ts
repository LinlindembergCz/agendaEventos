import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { CadastroComponent } from './@modules/cadastro/cadastro.component';
import { HomeComponent } from './@modules/home/home.component';
import { SucessoComponent } from './@modules/sucesso/sucesso.component';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'sucesso', component: SucessoComponent },
  { path: 'cadastro', component: CadastroComponent }


  

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
