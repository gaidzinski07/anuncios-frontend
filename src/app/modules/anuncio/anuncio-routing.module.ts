import {NgModule, Injectable} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AnuncioListarComponent } from './anuncio-listar/anuncio-listar.component';
import { AnuncioCadastrarComponent } from './anuncio-cadastrar/anuncio-cadastrar.component';

const routes: Routes = [
  {
    path: 'pesquisa',
    component: AnuncioListarComponent
  },
  {
    path: 'cadastro',
    component: AnuncioCadastrarComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnuncioRoutingModule {
}
