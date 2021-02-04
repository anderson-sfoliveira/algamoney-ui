import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { CadastroPessoasComponent } from './cadastro-pessoas/cadastro-pessoas.component';

@NgModule({
  declarations: [
    CadastroPessoasComponent
  ],
  imports: [
    CommonModule,

    TableModule,
    ButtonModule
  ],
  exports: [
    CadastroPessoasComponent
  ]
})
export class PessoasModule { }
