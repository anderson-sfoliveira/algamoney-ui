import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MessageComponent } from './message/message.component';
import { CadastroFormaPagamentoComponent } from './cadastro-forma-pagamento/cadastro-forma-pagamento.component';
import { LancamentoFinanceiroComponent } from './lancamento-financeiro/lancamento-financeiro.component';

import { NavegacaoModule } from './navegacao/navegacao.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { EmpresaModule } from './empresa/empresa.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MessageComponent,
    CadastroFormaPagamentoComponent,
    LancamentoFinanceiroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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

    NavegacaoModule,
    LancamentosModule,
    EmpresaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
