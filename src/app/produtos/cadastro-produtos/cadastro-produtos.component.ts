import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CategoriasService } from 'src/app/categorias/categorias.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Produto } from 'src/app/core/model';

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
    private categoriasService: CategoriasService
  ) { }

  ngOnInit(): void {
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
    console.log(this.produto);
  }

}
