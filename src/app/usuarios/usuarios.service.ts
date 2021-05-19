import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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

  usuariosURL: string;

  constructor(private http: HttpClient) {
    this.usuariosURL = `${environment.apiURL}/usuarios`;
  }

  pesquisar(filtro: UsuarioFiltro): Promise<any> {
    let params = new HttpParams();

    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());

    // se existir a propriedade "nome" no objeto "filtro" entra no if.
    if (filtro.nome) {
      //Precisamos atribuir o resultado do método "set" novamente à variável "params"
      params = params.set('nome', filtro.nome);
    }

    return this.http.get(`${this.usuariosURL}?resumo`, { params })
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
    return this.http.delete(`${this.usuariosURL}/${id}`)
      .toPromise()
      .then(() => null);
  }

  mudarStatus(id: number, ativo: boolean): Promise<void> {
    return this.http.put(`${this.usuariosURL}/${id}/ativo`, ativo)
      .toPromise()
      .then(() => null);
  }
}
