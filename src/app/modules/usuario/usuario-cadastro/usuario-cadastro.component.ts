import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioConsumer } from 'src/app/core/consumers/usuario.consumer';
import { Usuario } from 'src/app/core/model/usuario';
import { AlertService } from 'src/app/core/services/alert.service';
import { uffMailValidator } from 'src/app/core/validators/validators';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  visibility : boolean = false;
  visibilityIcon : string = 'visibility';

  form: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, uffMailValidator()]),
    celular: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    confirmaSenha: new FormControl('', [Validators.required, this.confirmaSenhaValidator()])
  });

  constructor(private consumer: UsuarioConsumer,
    private alert: AlertService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  save(): void{
    if(!this.formHaveErrors()){
      let usuario : Usuario = new Usuario(0, 
        this.form.controls['nome'].value,
        this.form.controls['email'].value,
        this.form.controls['senha'].value,
        this.form.controls['celular'].value,
        0);
        this.consumer.post(usuario, 'cadastrar').subscribe({
          next: () => {
            this.alert.openSnackBar('Cadastro realizado com sucesso!', false, false);
            this.router.navigateByUrl('login');
          },
          error: () => {
            this.alert.openSnackBar('Erro ao realizar o cadastro', false, true);
          }
        });
    } else{
      this.alert.openSnackBar('Preencha os campos corretamente', false, true);
    }
  }

  confirmaSenhaValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value: string | undefined = control.value;

        if (!value) {
            return null;
        }

        const confirmaSenhaValido : boolean = value === this.form.controls['senha'].value;

        return !confirmaSenhaValido ? {notValidEmail:true}: null;
    }
  }

  changeVisibility(): void{
    this.visibility = !this.visibility;
    this.visibilityIcon = this.visibility? 'visibility_off' : 'visibility';
  }

  formHaveErrors() : boolean{
    return this.form.invalid;
  }

}
