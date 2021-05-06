import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { NavegacaoModule } from './navegacao/navegacao.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { EmpresaModule } from './empresa/empresa.module';
import { FinanceiroModule } from './financeiro/financeiro.module';
import { FormaPagamentoModule } from './forma-pagamento/forma-pagamento.module';
import { CoreModule } from './core/core.module';
import { LancamentosService } from './lancamentos/lancamentos.service';
import { PessoasModule } from './pessoas/pessoas.module';
import { CategoriasModule } from './categorias/categorias.module';
import { CategoriasService } from './categorias/categorias.service';
import { ProdutosService } from './produtos/produtos.service';
import { ProdutosModule } from './produtos/produtos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    NavegacaoModule,
    LancamentosModule,
    EmpresaModule,
    FinanceiroModule,
    FormaPagamentoModule,
    CoreModule,
    PessoasModule,
    CategoriasModule,
    ProdutosModule
  ],
  providers: [
    LancamentosService,
    CategoriasService,
    ProdutosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
