import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    this.carregarCategorias();
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
    this.produtosService.adicionar(this.produto)
    .then(() => {
      this.messageService.add({ severity: 'success', summary: 'BRL Sistemas', detail: 'Produto adicionado com sucesso!' });
      
      form.reset();
      this.produto = new Produto();
    })
    .catch(erro => this.errorHandlerService.handle(erro));
  }

}
