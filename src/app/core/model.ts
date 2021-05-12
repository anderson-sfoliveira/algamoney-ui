export class Conta {
    contaId = 1;
}
export class Categoria {
    categoriaId: number;
    conta = new Conta();
    descricao: string;
}

export class Produto {
    produtoId: number;
    conta = new Conta();
    nome: string;
    descricao: string;
    categoria = new Categoria();
    preco: number;
}