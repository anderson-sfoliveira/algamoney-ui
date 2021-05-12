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
    console.log(this.route.snapshot.params['id']);
  }

  salvar(form: NgForm) {
    this.categoriasService.adicionar(this.categoria)
    .then(() => {
      this.messageService.add({ severity: 'success', summary: 'BRL Sistemas', detail: 'Categoria adicionada com sucesso!' });
      
      form.reset();
      this.categoria = new Categoria();
    })
    .catch(erro => this.errorHandlerService.handle(erro));
  }

}
