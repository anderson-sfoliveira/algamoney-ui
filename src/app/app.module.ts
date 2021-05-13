import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { NavegacaoModule } from './navegacao/navegacao.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { EmpresaModule } from './empresa/empresa.module';
import { FinanceiroModule } from './financeiro/financeiro.module';
import { FormaPagamentoModule } from './forma-pagamento/forma-pagamento.module';
import { CoreModule } from './core/core.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { CategoriasModule } from './categorias/categorias.module';
import { ProdutosModule } from './produtos/produtos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PesquisaCategoriasComponent } from './categorias/pesquisa-categorias/pesquisa-categorias.component';
import { CadastroCategoriasComponent } from './categorias/cadastro-categorias/cadastro-categorias.component';
import { CadastroProdutosComponent } from './produtos/cadastro-produtos/cadastro-produtos.component';
import { PesquisaProdutosComponent } from './produtos/pesquisa-produtos/pesquisa-produtos.component';

registerLocaleData(localePt);

// array de configurações de rotas
const routes: Routes = [
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: 'categorias', component: PesquisaCategoriasComponent },
  { path: 'categorias/novo', component: CadastroCategoriasComponent },
  { path: 'categorias/:id', component: CadastroCategoriasComponent },
  { path: 'produtos', component: PesquisaProdutosComponent },
  { path: 'produtos/novo', component: CadastroProdutosComponent },
  { path: 'produtos/:id', component: CadastroProdutosComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

    NavegacaoModule,
    LancamentosModule,
    EmpresaModule,
    FinanceiroModule,
    FormaPagamentoModule,
    CoreModule,
    PessoasModule,
    CategoriasModule,
    ProdutosModule,
    UsuariosModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
