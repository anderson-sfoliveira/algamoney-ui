import { Component, OnInit, ViewChild } from '@angular/core';
import { ProdutosService, ProdutoFiltro } from '../produtos.service';
import { LazyLoadEvent, MessageService } from 'primeng/api';

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

  constructor(
    private produtosService: ProdutosService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
//    this.pesquisar();
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.produtosService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.produtos = resultado.produtos;
      });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  excluir(produto: any) {
    this.produtosService.excluir(produto.produtoId)
      .then(() => {
        this.grid.clear();
        
        this.messageService.add({ severity: 'success', detail: 'Produto excluído com sucesso!' });
      })
  }
}
