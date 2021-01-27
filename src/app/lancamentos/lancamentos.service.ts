import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

// essa interface é criada para criar um "contrato" para definir quais serão os campos do filtro.
export interface LancamentoFiltro {
  descricao: string;
}

@Injectable({
  providedIn: 'root'
})
export class LancamentosService {

  lancamentosURL = 'http://localhost:8080/lancamentos';

  constructor(private http: HttpClient) { }

  pesquisar(filtro: LancamentoFiltro): Promise<any> {
    const headers = new HttpHeaders()
    .append('Authorization', 'Basic YW5kZXJzb24uc2ZvbGl2ZWlyYUBnbWFpbC5jb206YWRtaW4=');

    let params = new HttpParams();

    // se existir a propriedade "descricao" no objeto "filtro" entra no if.
    if (filtro.descricao) {
      //Precisamos atribuir o resultado do método "set" novamente à variável "params"
      params = params.set('descricao', filtro.descricao);
    }

    return this.http.get(`${this.lancamentosURL}?resumo`, { headers, params })
      .toPromise()
      .then(response => response['content']);
//      .then(response => {
//        console.log(response);
//      });
//      .catch(erro => {
//        return Promise.reject(`Erro ao consultar cidades`);
//      })
  }
}
