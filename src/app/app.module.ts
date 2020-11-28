import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';

import { NavegacaoModule } from './navegacao/navegacao.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { EmpresaModule } from './empresa/empresa.module';
import { FinanceiroModule } from './financeiro/financeiro.module';
import { FormaPagamentoModule } from './forma-pagamento/forma-pagamento.module';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    NavegacaoModule,
    LancamentosModule,
    EmpresaModule,
    FinanceiroModule,
    FormaPagamentoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
