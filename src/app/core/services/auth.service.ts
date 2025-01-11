import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioConsumer } from '../consumers/usuario.consumer';
import { Login } from '../model/login';
import { AuthToken } from '../model/token';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private consumer: UsuarioConsumer, private storage: StorageService) { }

  login(email: string, senha: string): Observable<AuthToken> {
    let credentials: Login = new Login(email, senha);
    return this.consumer.login(credentials);
  }

  logout() {
    this.storage.deletar('token');
  }

  get isAuthenticated(): boolean {
    const token = this.storage.encontrarValor('token');
    return !!token;
  }
}