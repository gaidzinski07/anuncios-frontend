import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AnuncioConsumer } from 'src/app/core/consumers/anuncio.consumer';
import { UsuarioConsumer } from 'src/app/core/consumers/usuario.consumer';
import { Anuncio } from 'src/app/core/model/anuncio';
import { Usuario } from 'src/app/core/model/usuario';
import { AlertService } from 'src/app/core/services/alert.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { uffMailValidator } from 'src/app/core/validators/validators';

@Component({
  selector: 'app-anuncio-cadastrar',
  templateUrl: './anuncio-cadastrar.component.html',
  styleUrls: ['./anuncio-cadastrar.component.css']
})
export class AnuncioCadastrarComponent implements OnInit {

  visibility : boolean = false;
  visibilityIcon : string = 'visibility';

  form: FormGroup = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required]),
    preco: new FormControl('', [Validators.required]),
    endereco: new FormControl('', [Validators.required]),
    categoria: new FormControl('', [Validators.required]),
    tipoAnuncio: new FormControl('', [Validators.required])
  });

  constructor(private consumer: AnuncioConsumer,
    private alert: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    private storageService : StorageService
  ) { }

  ngOnInit(): void {
  }

  save(): void{
    if(!this.formHaveErrors()){
      let usuario : Anuncio = new Anuncio(0, 
        this.form.controls['titulo'].value,
        this.form.controls['descricao'].value,
        parseFloat(this.form.controls['preco'].value),
        this.form.controls['endereco'].value,
        this.form.controls['categoria'].value,
        this.form.controls['tipoAnuncio'].value,
        this.storageService.encontrarValor('token')!
        );
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
