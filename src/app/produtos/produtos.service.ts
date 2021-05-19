import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Produto } from '../core/model';
import { environment } from 'src/environments/environment';

// essa interface é criada para criar um "contrato" para definir quais serão os campos do filtro.
export class ProdutoFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtosURL: string;

  constructor(private http: HttpClient) {
    this.produtosURL = `${environment.apiURL}/produtos`;
  }

  pesquisar(filtro: ProdutoFiltro): Promise<any> {
    let params = new HttpParams();
    
    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());

    // se existir a propriedade "nome" no objeto "filtro" entra no if.
    if (filtro.nome) {
      //Precisamos atribuir o resultado do método "set" novamente à variável "params"
      params = params.set('nome', filtro.nome);
    }
    
    return this.http.get(`${this.produtosURL}?resumo`, { params })
      .toPromise()
      .then(response => {
        const produtos = response['content']
        const resultado = {
          produtos,
          total: response['totalElements']
        }
        return resultado;
      });
  }

  excluir(id: number): Promise<void> {
      return this.http.delete(`${this.produtosURL}/${id}`)
      .toPromise()
      .then(() => null);
  }

  adicionar(produto: Produto): Promise<Produto> {
    return this.http.post<Produto>(this.produtosURL, produto)
      .toPromise();
  }

  atualizar(produto: Produto): Promise<Produto> {
    return this.http.put<Produto>(`${this.produtosURL}/${produto.produtoId}`, produto)
      .toPromise();
  }
  buscarPorId(id: number): Promise<Produto> {
    return this.http.get<Produto>(`${this.produtosURL}/${id}`)
      .toPromise()
      .then(response => response);
  }
}
