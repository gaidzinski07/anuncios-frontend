import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class StorageService{
    salvar(chave: string, valor: string){
        localStorage.setItem(chave, valor);
    }
    encontrarValor(chave: string): string | null{
        return localStorage.getItem(chave);
    }
    deletar(chave : string){
        localStorage.removeItem(chave);
    }
}