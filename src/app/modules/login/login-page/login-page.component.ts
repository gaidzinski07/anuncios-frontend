import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/core/model/login';
import { uffMailValidator } from 'src/app/core/validators/validators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {

  visibilityIcon: string = 'visibility';
  visibility: boolean = false;
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, uffMailValidator()]),
    senha: new FormControl('', [Validators.required]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    if(!this.form.controls['email'].invalid && !this.form.controls['senha'].invalid){
      let login : Login = new Login(this.form.controls['email'].value, this.form.controls['senha'].value);
      console.log(login);
    }
  }

  changeVisibility(): void{
    console.log('visibility')
    this.visibility = !this.visibility;
    this.visibilityIcon = this.visibility? 'visibility_off' : 'visibility';
  }

}
