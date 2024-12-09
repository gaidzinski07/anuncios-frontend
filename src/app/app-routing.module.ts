import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: ()=>import('./modules/login/login.module').then(m => m.LoginModule),
    canActivate: []
  },
  {
    path: 'usuario',
    loadChildren: ()=>import('./modules/usuario/usuario.module').then(m=>m.UsuarioModule),
    canActivate: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
