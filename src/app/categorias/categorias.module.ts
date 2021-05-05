import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PesquisaCategoriasComponent } from './pesquisa-categorias/pesquisa-categorias.component';

@NgModule({
  declarations: [
    PesquisaCategoriasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PesquisaCategoriasComponent
  ]
})
export class CategoriasModule { }
