import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../seguranca/auth.guard';

import { CadastroCategoriasComponent } from './cadastro-categorias/cadastro-categorias.component';
import { PesquisaCategoriasComponent } from './pesquisa-categorias/pesquisa-categorias.component';

// array de configurações de rotas
const routes: Routes = [
  // {
  //   path: 'categorias',
  //   component: PesquisaCategoriasComponent,
  //   canActivate: [AuthGuard],
  //   data: { roles: ['ROLE_PESQUISAR_CATEGORIA'] } // poderia ter mais de uma "role" pois é um array
  // },
  {
    path: 'categorias/novo',
    component: CadastroCategoriasComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_CATEGORIA'] }
  },
  {
    path: 'categorias/:id',
    component: CadastroCategoriasComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_CATEGORIA'] }
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
export class CategoriasRoutingModule { }
