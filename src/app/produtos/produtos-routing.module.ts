import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';
import { PesquisaProdutosComponent } from './pesquisa-produtos/pesquisa-produtos.component';

// array de configurações de rotas
const routes: Routes = [
    { path: 'produtos', component: PesquisaProdutosComponent },
    { path: 'produtos/novo', component: CadastroProdutosComponent },
    { path: 'produtos/:id', component: CadastroProdutosComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProdutosRoutingModule { }
