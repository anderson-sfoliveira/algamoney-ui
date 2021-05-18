import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';

import { ProdutosService, ProdutoFiltro } from '../produtos.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { CategoriasService } from 'src/app/categorias/categorias.service';

@Component({
  selector: 'app-pesquisa-produtos',
  templateUrl: './pesquisa-produtos.component.html',
  styleUrls: ['./pesquisa-produtos.component.css']
})
export class PesquisaProdutosComponent implements OnInit {

  totalRegistros = 0;
  filtro = new ProdutoFiltro();
  produtos = [];
  @ViewChild('tabela') grid;
  categorias = [];

  constructor(
    private produtosService: ProdutosService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private errorHandlerService: ErrorHandlerService,
    private categoriasService: CategoriasService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de produtos');
    
    this.carregarCategorias();
  }

  carregarCategorias() {/*
    return this.categoriasService.listarTodas()
      .then(resultado => {
        this.categorias = resultado.map(c => {
          return { label: c.descricao, value: c.categoriaId };
        });
      })
      .catch(erro => this.errorHandlerService.handle(erro));*/
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.produtosService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.produtos = resultado.produtos;
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmaExclusao(produto: any) {
    this.confirmationService.confirm({
      message: 'Confirma exclusão do produto?',
      accept: () => {
        this.excluir(produto);
      }
    });
  }

  excluir(produto: any) {
    this.produtosService.excluir(produto.produtoId)
      .then(() => {
        this.grid.clear(); // recarrega as informações da grid

        this.messageService.add({ severity: 'success', summary: 'BRL Sistemas', detail: 'Produto excluído com sucesso!' });
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }
}
