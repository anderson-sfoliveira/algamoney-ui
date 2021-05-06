import { Component, OnInit } from '@angular/core';
import { CategoriasService, CategoriaFiltro } from '../categorias.service';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-pesquisa-categorias',
  templateUrl: './pesquisa-categorias.component.html',
  styleUrls: ['./pesquisa-categorias.component.css']
})
export class PesquisaCategoriasComponent implements OnInit {

  totalRegistros = 0;
  filtro = new CategoriaFiltro();
  categorias = [];

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit() {
//    this.pesquisar();
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.categoriasService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.categorias = resultado.categorias;
      });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }
}
