import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { InputMaskModule } from 'primeng/inputmask';
import { NgxCurrencyModule } from 'ngx-currency';

import { PesquisaProdutosComponent } from './pesquisa-produtos/pesquisa-produtos.component';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';
import { SharedModule } from '../shared/shared.module';
import { ProdutosRoutingModule } from './produtos-routing.module';

@NgModule({
  declarations: [
    PesquisaProdutosComponent,
    CadastroProdutosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputNumberModule,
    CheckboxModule,
    InputMaskModule,
    NgxCurrencyModule,

    SharedModule,
    ProdutosRoutingModule
  ],
  exports: []
})
export class ProdutosModule { }
