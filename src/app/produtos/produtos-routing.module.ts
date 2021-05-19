import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../seguranca/auth.guard';

import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';
import { PesquisaProdutosComponent } from './pesquisa-produtos/pesquisa-produtos.component';

// array de configurações de rotas
const routes: Routes = [
  {
    path: 'produtos',
    component: PesquisaProdutosComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_PRODUTO'] } // poderia ter mais de uma "role" pois é um array
  },
  {
    path: 'produtos/novo',
    component: CadastroProdutosComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_PRODUTO'] }
  },
  {
    path: 'produtos/:id',
    component: CadastroProdutosComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_PRODUTO'] }
  }
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
