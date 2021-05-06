import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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
}
