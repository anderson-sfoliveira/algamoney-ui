import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { LancamentoFinanceiroComponent } from './lancamento-financeiro/lancamento-financeiro.component';

@NgModule({
  declarations: [
    LancamentoFinanceiroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LancamentoFinanceiroComponent
  ]
})
export class FinanceiroModule { }
