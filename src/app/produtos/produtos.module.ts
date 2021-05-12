import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisaProdutosComponent } from './pesquisa-produtos/pesquisa-produtos.component';
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
import { SharedModule } from '../shared/shared.module';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';
import { NgxCurrencyModule } from 'ngx-currency';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PesquisaProdutosComponent,
    CadastroProdutosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

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

    SharedModule
  ],
  exports: [
    PesquisaProdutosComponent,
    CadastroProdutosComponent
  ]
})
export class ProdutosModule { }
