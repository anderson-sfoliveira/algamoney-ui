import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroCategoriasComponent } from './cadastro-categorias/cadastro-categorias.component';
import { PesquisaCategoriasComponent } from './pesquisa-categorias/pesquisa-categorias.component';

// array de configurações de rotas
const routes: Routes = [
  { path: 'categorias', component: PesquisaCategoriasComponent },
  { path: 'categorias/novo', component: CadastroCategoriasComponent },
  { path: 'categorias/:id', component: CadastroCategoriasComponent },
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
