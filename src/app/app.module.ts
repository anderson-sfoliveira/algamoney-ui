import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { NavegacaoModule } from './navegacao/navegacao.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { EmpresaModule } from './empresa/empresa.module';
import { FinanceiroModule } from './financeiro/financeiro.module';
import { FormaPagamentoModule } from './forma-pagamento/forma-pagamento.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    NavegacaoModule,
    LancamentosModule,
    EmpresaModule,
    FinanceiroModule,
    FormaPagamentoModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
