import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioConsumer } from 'src/app/core/consumers/usuario.consumer';
import { Usuario } from 'src/app/core/model/usuario';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.css']
})
export class UsuarioPerfilComponent implements OnInit {

  visibility: boolean = false;
  visibilityIcon: string = 'visibility';

  usuario: Usuario = new Usuario(
    1, 
    'Daniel Fernandes', 
    'fernandes_daniel@id.uff.br', 
    'senha123', 
    '21980188927', 
    0
  );

  constructor(
    private consumer: UsuarioConsumer,
    private alert: AlertService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.consumer.get(1);
  }

  changeVisibility(): void {
    this.visibility = !this.visibility;
    this.visibilityIcon = this.visibility ? 'visibility_off' : 'visibility';
  }

  // Este método foi removido, pois não há mais formulário para salvar.
}
