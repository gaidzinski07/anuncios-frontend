import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AnuncioConsumer } from 'src/app/core/consumers/anuncio.consumer';
import { Anuncio } from 'src/app/core/model/anuncio';
import { Usuario } from 'src/app/core/model/usuario';

const usuario1 = new Usuario(null, 'Pedro Duarte', 'pedrinhogamer@id.uff.br', '1231231', '21971248256', 5);
const usuario2 = new Usuario(null, 'Pablo Vegetti', 'pedrinhogamer@id.uff.br', '1231231', '21971248256', 5);

@Component({
  selector: 'app-anuncio-listar',
  templateUrl: './anuncio-listar.component.html',
  styleUrls: ['./anuncio-listar.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AnuncioListarComponent implements OnInit {

  anuncios: Array<Anuncio> = [
    new Anuncio('1', 'Aulas de Cálculo I', 'Aulas de cálculo I com foco em bla bla blabla bla bla blablabla', 100, 'Online', 'Aula Particular', 'Oferta', usuario1),
    new Anuncio('2', 'Samsung Galaxy S22', 'Telefone Samsung Galaxy S22 em perfeito estado bla bla blabla bla bla blablabla', 100, 'São Domingos - Niterói', 'Tecnologia', 'Oferta', usuario2),
    new Anuncio('2', 'Notebook Asus Intel core I7', 'Notebook gamer Asus bla bla blabla bla bla blablabla', 100, 'Centro - Niterói', 'Tecnologia', 'Oferta', usuario1),
    new Anuncio('2', 'Redes de Computadores e a Internet', 'Livro Redes de Computadores e a Internet bla bla blabla bla bla blablabla', 100, 'Icaraí - Niterói', 'Livro', 'Oferta', usuario2),
    new Anuncio('2', 'Escrivaninha 100x60x50cm', 'Escrivaninha branca bla bla blabla bla bla blablabla', 100, 'Fonseca - Niterói', 'Móvel', 'Oferta', usuario1),
  ];

  constructor(private consumer: AnuncioConsumer) { }

  ngOnInit(): void {
  }

}
