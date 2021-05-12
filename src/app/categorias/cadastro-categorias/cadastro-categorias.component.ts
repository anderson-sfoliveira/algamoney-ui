import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
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
      .then(() => {
        this.messageService.add({ severity: 'success', summary: 'BRL Sistemas', detail: 'Categoria adicionada com sucesso!' });

        form.reset();
        this.categoria = new Categoria();
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  atualizar(form: NgForm) {
    this.categoriasService.atualizar(this.categoria)
      .then(resultado => {
        this.categoria = resultado;

        this.messageService.add({ severity: 'success', summary: 'BRL Sistemas', detail: 'Categoria atualizada com sucesso!' });
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

}
