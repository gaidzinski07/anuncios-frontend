import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
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

  constructor() { }

  ngOnInit(): void {
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
    console.log('visibility')
    this.visibility = !this.visibility;
    this.visibilityIcon = this.visibility? 'visibility_off' : 'visibility';
  }

}
