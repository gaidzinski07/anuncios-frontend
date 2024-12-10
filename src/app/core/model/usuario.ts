export class Usuario{
    id: number | null;
    nome: string;
    email:string;
    senha: string;
    telefone: string;
    reputacao: number | null;

    constructor(id: number | null,
        nome: string,
        email:string,
        senha: string,
        telefone: string,
        reputacao: number | null){
            this.id = id;
            this.nome = nome;
            this.email = email;
            this.senha = senha;
            this.telefone = telefone;
            this.reputacao = reputacao;
        }
}