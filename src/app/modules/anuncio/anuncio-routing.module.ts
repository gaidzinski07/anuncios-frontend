import {NgModule, Injectable} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AnuncioListarComponent } from './anuncio-listar/anuncio-listar.component';

const routes: Routes = [
  {
    path: 'pesquisa',
    component: AnuncioListarComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnuncioRoutingModule {
}
