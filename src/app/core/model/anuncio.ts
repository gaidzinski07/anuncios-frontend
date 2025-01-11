import { Usuario } from "./usuario";

export class Anuncio{
    id: string | null;
    titulo: string | null;
    descricao:string | null;
    preco: number | null;
    endereco: string | null;
    categoria: string | null;
    tipoAnuncio: string | null;
    usuario: Usuario | null;

    constructor(id: string, titulo: string | null, descricao: string, preco: number, endereco: string, categoria : string, tipoAnuncio: string, usuario: Usuario){
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.preco = preco;
        this.endereco = endereco;
        this.categoria = categoria;
        this.tipoAnuncio = tipoAnuncio;
        this.usuario = usuario;
    }
}