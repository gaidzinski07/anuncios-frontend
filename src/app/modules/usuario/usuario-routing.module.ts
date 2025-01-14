import {NgModule, Injectable} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { UsuarioPerfilComponent } from './usuario-perfil/usuario-perfil.component';


const routes: Routes = [
  {
    path: 'cadastro',
    component: UsuarioCadastroComponent
  },
  {
    path: 'perfil',
    component: UsuarioPerfilComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule {
}
