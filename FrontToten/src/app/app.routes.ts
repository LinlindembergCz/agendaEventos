import { Routes } from '@angular/router';

import { HomeComponent } from './@feedback/home/home.component';
import { SucessoComponent } from './@feedback/sucesso/sucesso.component';
import { CadastroComponent } from './@feedback/cadastro/cadastro.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'sucesso', component: SucessoComponent },
    { path: 'cadastro', component: CadastroComponent }
];