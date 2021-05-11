import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

// essa interface é criada para criar um "contrato" para definir quais serão os campos do filtro.
export class UsuarioFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuariosURL = 'http://localhost:8080/usuarios';

  constructor(private http: HttpClient) { }

  pesquisar(filtro: UsuarioFiltro): Promise<any> {
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

    return this.http.get(`${this.usuariosURL}?resumo`, { headers, params })
      .toPromise()
      .then(response => {
        const usuarios = response['content']
        const resultado = {
          usuarios,
          total: response['totalElements']
        }
        return resultado;
      });
  }

  excluir(id: number): Promise<void> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtbTRhZG1pbmlzdHJhZG9yOjEyMzQ1Ng==');

    return this.http.delete(`${this.usuariosURL}/${id}`, { headers })
      .toPromise()
      .then(() => null);
  }

  mudarStatus(id: number, ativo: boolean): Promise<void> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtbTRhZG1pbmlzdHJhZG9yOjEyMzQ1Ng==')
      .append('Content-Type', 'application/json');

    return this.http.put(`${this.usuariosURL}/${id}/ativo`, ativo, { headers })
      .toPromise()
      .then(() => null);
  }
}
