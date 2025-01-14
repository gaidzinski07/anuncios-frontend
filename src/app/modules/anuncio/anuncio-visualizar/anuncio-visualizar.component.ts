import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AnuncioConsumer } from 'src/app/core/consumers/anuncio.consumer';
import { Anuncio } from 'src/app/core/model/anuncio';
import { Usuario } from 'src/app/core/model/usuario';


@Component({
  selector: 'app-anuncio-visualizar',
  templateUrl: './anuncio-visualizar.component.html',
  styleUrls: ['./anuncio-visualizar.component.css']
})
export class AnuncioVisualizarComponent implements OnInit {

    usuario: Usuario = new Usuario(
        1, 
        'Daniel Fernandes', 
        'fernandes_daniel@id.uff.br', 
        'senha123', 
        '21980188927', 
        0
      );

    anuncio: Anuncio = new Anuncio(
        '1',
        'Aulas de Cálculo I',
        'Aulas de cálculo I com foco em bla bla blabla bla bla blablabla',
        100,
        'Online',
        'Aula Particular',
        'Oferta',
        this.usuario
    );

  constructor(private consumer: AnuncioConsumer) { }

  ngOnInit(): void {
  }

}
