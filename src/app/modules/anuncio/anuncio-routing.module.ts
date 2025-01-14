import {NgModule, Injectable} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AnuncioListarComponent } from './anuncio-listar/anuncio-listar.component';
import { AnuncioVisualizarComponent } from './anuncio-visualizar/anuncio-visualizar.component';

const routes: Routes = [
  {
    path: 'pesquisa',
    component: AnuncioListarComponent
  },
  {
    path: 'visualizar',
    component: AnuncioVisualizarComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnuncioRoutingModule {
}
