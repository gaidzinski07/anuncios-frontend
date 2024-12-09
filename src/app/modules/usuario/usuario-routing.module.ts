import {NgModule, Injectable} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';


const routes: Routes = [
  {
    path: 'cadastro',
    component: UsuarioCadastroComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule {
}
