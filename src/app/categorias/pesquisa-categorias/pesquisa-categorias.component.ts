import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoriasService, CategoriaFiltro } from '../categorias.service';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';

@Component({
  selector: 'app-pesquisa-categorias',
  templateUrl: './pesquisa-categorias.component.html',
  styleUrls: ['./pesquisa-categorias.component.css']
})
export class PesquisaCategoriasComponent implements OnInit {

  totalRegistros = 0;
  filtro = new CategoriaFiltro();
  categorias = [];
  @ViewChild('tabela') grid;

  constructor(
    private categoriasService: CategoriasService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

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

  confirmaExclusao(categoria: any) {
    this.confirmationService.confirm({
      message: 'Confirma exclusão da categoria?',
      accept: () => {
        this.excluir(categoria);
      }
    });
  }

  excluir(categoria: any) {
      this.categoriasService.excluir(categoria.categoriaId)
      .then(() => {
        this.grid.clear(); // recarrega as informações da grid

        this.messageService.add({ severity: 'success', detail: 'Categoria excluída com sucesso!' });
      })
  }
}
