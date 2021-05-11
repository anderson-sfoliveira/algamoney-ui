import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

// essa interface é criada para criar um "contrato" para definir quais serão os campos do filtro.
export class CategoriaFiltro {
  descricao: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  categoriasURL = 'http://localhost:8080/categorias';

  constructor(private http: HttpClient) { }

  pesquisar(filtro: CategoriaFiltro): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtbTRhZG1pbmlzdHJhZG9yOjEyMzQ1Ng==');

    let params = new HttpParams();
    
    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());

    // se existir a propriedade "descricao" no objeto "filtro" entra no if.
    if (filtro.descricao) {
      //Precisamos atribuir o resultado do método "set" novamente à variável "params"
      params = params.set('descricao', filtro.descricao);
    }
    
    return this.http.get(`${this.categoriasURL}?filtrar`, { headers, params })
      .toPromise()
      .then(response => {
        const categorias = response['content']
        const resultado = {
          categorias,
          total: response['totalElements']
        }
        return resultado;
      });
  }

  listarTodas(): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtbTRhZG1pbmlzdHJhZG9yOjEyMzQ1Ng==');

    return this.http.get(`${this.categoriasURL}`, { headers })
      .toPromise()
      .then(response => response);
  }

  excluir(id: number): Promise<void> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtbTRhZG1pbmlzdHJhZG9yOjEyMzQ1Ng==');

      return this.http.delete(`${this.categoriasURL}/${id}`, { headers })
      .toPromise()
      .then(() => null);
  }
}
