import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LancamentosService {

  lancamentosURL = 'http://localhost:8080/lancamentos';

  constructor(private http: HttpClient) { }

  pesquisar(): Promise<any> {
    const headers = new HttpHeaders()
    .append('Authorization', 'Basic YW5kZXJzb24uc2ZvbGl2ZWlyYUBnbWFpbC5jb206YWRtaW4=');

    return this.http.get(`${this.lancamentosURL}?resumo`, { headers })
      .toPromise()
      .then(response => response['content']);
//      .catch(erro => {
//        return Promise.reject(`Erro ao consultar cidades`);
//      })
  }
}
