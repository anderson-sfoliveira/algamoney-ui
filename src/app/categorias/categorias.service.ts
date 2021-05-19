import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Categoria } from '../core/model';
import { environment } from 'src/environments/environment';

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

  categoriasURL: string;

  constructor(private http: HttpClient) {
    this.categoriasURL = `${environment.apiURL}/categorias`;
  }

  pesquisar(filtro: CategoriaFiltro): Promise<any> {
    let params = new HttpParams();
    
    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());

    // se existir a propriedade "descricao" no objeto "filtro" entra no if.
    if (filtro.descricao) {
      //Precisamos atribuir o resultado do método "set" novamente à variável "params"
      params = params.set('descricao', filtro.descricao);
    }
    
    return this.http.get(`${this.categoriasURL}?filtrar`, { params })
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
    return this.http.get(`${this.categoriasURL}`)
      .toPromise()
      .then(response => response);
  }

  excluir(id: number): Promise<void> {
      return this.http.delete(`${this.categoriasURL}/${id}`)
      .toPromise()
      .then(() => null);
  }

  adicionar(categoria: Categoria): Promise<Categoria> {
    return this.http.post<Categoria>(this.categoriasURL, categoria)
      .toPromise();
  }

  atualizar(categoria: Categoria): Promise<Categoria> {
    return this.http.put<Categoria>(`${this.categoriasURL}/${categoria.categoriaId}`, categoria)
      .toPromise();
  }

  buscarPorId(id: number): Promise<Categoria> {
    return this.http.get<Categoria>(`${this.categoriasURL}/${id}`)
      .toPromise()
      .then(response => response);
  }
}
