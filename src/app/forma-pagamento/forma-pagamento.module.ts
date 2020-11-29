import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { CadastroFormaPagamentoComponent } from './cadastro-forma-pagamento/cadastro-forma-pagamento.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CadastroFormaPagamentoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,

    SharedModule
  ],
  exports: [
    CadastroFormaPagamentoComponent
  ]
})
export class FormaPagamentoModule { }
