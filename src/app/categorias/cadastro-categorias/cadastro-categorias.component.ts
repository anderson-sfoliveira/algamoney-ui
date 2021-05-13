import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { MessageService } from 'primeng/api';

import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Categoria } from 'src/app/core/model';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-cadastro-categorias',
  templateUrl: './cadastro-categorias.component.html',
  styleUrls: ['./cadastro-categorias.component.css']
})
export class CadastroCategoriasComponent implements OnInit {

  categoria = new Categoria();

  constructor(
    private categoriasService: CategoriasService,
    private errorHandlerService: ErrorHandlerService,
    private messageService: MessageService,
    private route: ActivatedRoute, // router = rota
    private router: Router, // router = roteador
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Nova categoria');

    const categoriaId = this.route.snapshot.params['id'];

    if (categoriaId) {
      this.carregarCategoria(categoriaId);
    }
  }

  get editando() {
    return Boolean(this.categoria.categoriaId);
  }

  carregarCategoria(id: number) {
    this.categoriasService.buscarPorId(id)
      .then(resultado => {
        this.categoria = resultado;
        this.atualizarTituloEdicao();
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
    this.categoriasService.adicionar(this.categoria)
      .then(resultado => {
        this.messageService.add({ severity: 'success', summary: 'BRL Sistemas', detail: 'Categoria adicionada com sucesso!' });

        // form.reset();
        // this.categoria = new Categoria();
        this.router.navigate(['/categorias', resultado.categoriaId]);
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  atualizar(form: NgForm) {
    this.categoriasService.atualizar(this.categoria)
      .then(resultado => {
        this.categoria = resultado;

        this.messageService.add({ severity: 'success', summary: 'BRL Sistemas', detail: 'Categoria atualizada com sucesso!' });
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  novo(form: NgForm) {
    form.reset();
    
    setTimeout(function() {
      this.categoria = new Categoria();
    }.bind(this), 1);

    this.router.navigate(['/categorias/novo']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição categoria: ${this.categoria.descricao}`);
  }
}