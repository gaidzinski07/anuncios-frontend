import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioConsumer } from 'src/app/core/consumers/usuario.consumer';
import { Usuario } from 'src/app/core/model/usuario';
import { AlertService } from 'src/app/core/services/alert.service';
import { uffMailValidator } from 'src/app/core/validators/validators';

@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.css']
})
export class UsuarioPerfilComponent implements OnInit {

  visibility : boolean = false;
  visibilityIcon : string = 'visibility';

  form: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, uffMailValidator()]),
    celular: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required])
  });

  constructor(private consumer: UsuarioConsumer,
    private alert: AlertService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  

  formHaveErrors() : boolean{
    return this.form.invalid;
  }

}
