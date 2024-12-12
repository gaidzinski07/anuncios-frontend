import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioConsumer } from 'src/app/core/consumers/usuario.consumer';
import { Login } from 'src/app/core/model/login';
import { AuthToken } from 'src/app/core/model/token';
import { AlertService } from 'src/app/core/services/alert.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { uffMailValidator } from 'src/app/core/validators/validators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {

  visibilityIcon: string = 'visibility';
  visibility: boolean = false;
  logging: boolean = false;
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, uffMailValidator()]),
    senha: new FormControl('', [Validators.required]),
  });

  constructor(private consumer: UsuarioConsumer, private alert: AlertService, private storage: StorageService, private loginService: AuthService) { }

  ngOnInit(): void {

    if(this.storage.encontrarValor("token")){
      console.log('Ja ta logado');
    }

  }

  submit(): void {
    if(!this.form.controls['email'].invalid && !this.form.controls['senha'].invalid){
      //let login : Login = new Login(this.form.controls['email'].value, this.form.controls['senha'].value);
      this.logging = true;
      this.loginService.login(this.form.controls['email'].value, this.form.controls['senha'].value).subscribe({
        next: (res: AuthToken) => {
          this.alert.openSnackBar('Login realizado com sucesso!', false, false);
          this.storage.salvar("token", res.token!);
        },
        error: (e) => {
          if(e.status === 401){
            this.alert.openSnackBar('Credenciais inválidas', false, true);
          }else{
            this.alert.openSnackBar('Erro ao processar a requisição. Tente novamente.', false, true);
          }
        },
        complete: () => {this.logging = false;}
      })
    }
  }

  changeVisibility(): void{
    this.visibility = !this.visibility;
    this.visibilityIcon = this.visibility? 'visibility_off' : 'visibility';
  }

}
