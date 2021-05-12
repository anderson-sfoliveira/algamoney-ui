import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Categoria } from 'src/app/core/model';

@Component({
  selector: 'app-cadastro-categorias',
  templateUrl: './cadastro-categorias.component.html',
  styleUrls: ['./cadastro-categorias.component.css']
})
export class CadastroCategoriasComponent implements OnInit {

  categoria = new Categoria();

  constructor() { }

  ngOnInit(): void {
  }

  salvar(form: NgForm) {
    console.log(this.categoria);
  }

}
