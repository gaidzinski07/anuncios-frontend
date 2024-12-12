import { HttpClient } from "@angular/common/http";
import { Usuario } from "../model/usuario";
import { AbstractConsumer } from "./abstract.consumer";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Login } from "../model/login";

@Injectable({
    providedIn: 'root'
  })
export class UsuarioConsumer extends AbstractConsumer<Usuario>{
    constructor(http: HttpClient) {
        super(http, 'usuario');
    }

    login(credenciais: Login): Observable<any>{
        return this.post(credenciais, 'auth');
    }
}