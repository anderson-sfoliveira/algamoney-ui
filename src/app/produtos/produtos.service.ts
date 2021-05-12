import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Produto } from '../core/model';

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

  produtosURL = 'http://localhost:8080/produtos';

  constructor(private http: HttpClient) { }

  pesquisar(filtro: ProdutoFiltro): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtbTRhZG1pbmlzdHJhZG9yOjEyMzQ1Ng==');

    let params = new HttpParams();
    
    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());

    // se existir a propriedade "nome" no objeto "filtro" entra no if.
    if (filtro.nome) {
      //Precisamos atribuir o resultado do método "set" novamente à variável "params"
      params = params.set('nome', filtro.nome);
    }
    
    return this.http.get(`${this.produtosURL}?resumo`, { headers, params })
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
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtbTRhZG1pbmlzdHJhZG9yOjEyMzQ1Ng==');

      return this.http.delete(`${this.produtosURL}/${id}`, { headers })
      .toPromise()
      .then(() => null);
  }

  adicionar(produto: Produto): Promise<Produto> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtbTRhZG1pbmlzdHJhZG9yOjEyMzQ1Ng==')
      .append('Content-Type', 'application/json');
  
    return this.http.post<Produto>(this.produtosURL, produto, { headers })
      .toPromise();
  }

  atualizar(produto: Produto): Promise<Produto> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtbTRhZG1pbmlzdHJhZG9yOjEyMzQ1Ng==')
      .append('Content-Type', 'application/json');
      
    return this.http.put<Produto>(`${this.produtosURL}/${produto.produtoId}`, produto, { headers })
      .toPromise();
  }
  buscarPorId(id: number): Promise<Produto> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtbTRhZG1pbmlzdHJhZG9yOjEyMzQ1Ng==');
    return this.http.get<Produto>(`${this.produtosURL}/${id}`, { headers })
      .toPromise()
      .then(response => response);
  }
}
