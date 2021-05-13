import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MessageService } from 'primeng/api';

import { CategoriasService } from 'src/app/categorias/categorias.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Produto } from 'src/app/core/model';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css']
})
export class CadastroProdutosComponent implements OnInit {

  produto = new Produto();
  categorias = [];

  constructor(
    private errorHandlerService: ErrorHandlerService,
    private categoriasService: CategoriasService,
    private produtosService: ProdutosService,
    private messageService: MessageService,
    private route: ActivatedRoute, // router = rota
    private router: Router // router = roteador
  ) { }

  ngOnInit(): void {
    this.carregarCategorias();

    const produtoId = this.route.snapshot.params['id'];
    if (produtoId) {
      this.carregarProduto(produtoId);
    }
  }
  get editando() {
    return Boolean(this.produto.produtoId);
  }
  carregarProduto(id: number) {
    this.produtosService.buscarPorId(id)
      .then(resultado => {
        this.produto = resultado;
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  carregarCategorias() {
    return this.categoriasService.listarTodas()
      .then(resultado => {
        this.categorias = resultado.map(c => {
          return { label: c.descricao, value: c.categoriaId };
        });
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  salvar(form: NgForm) {
    if (this.editando) {
      this.atualizar(form);
    } else {
      this.adicionar(form);
    }
  }

  adicionar(form: NgForm) {
    this.produtosService.adicionar(this.produto)
    .then(resultado => {
      this.messageService.add({ severity: 'success', summary: 'BRL Sistemas', detail: 'Produto adicionado com sucesso!' });
      
      // form.reset();
      // this.produto = new Produto();
      this.router.navigate(['/produtos', resultado.produtoId]);
    })
    .catch(erro => this.errorHandlerService.handle(erro));
  }

  atualizar(form: NgForm) {
    this.produtosService.atualizar(this.produto)
      .then(resultado => {
        this.produto = resultado;
        this.messageService.add({ severity: 'success', summary: 'BRL Sistemas', detail: 'Produto atualizado com sucesso!' });
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  novo(form: NgForm) {
    form.reset();
    
    setTimeout(function() {
      this.produto = new Produto();
    }.bind(this), 1);
    this.router.navigate(['/produtos/novo']);
  }
}
