import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';
import { PesquisaCategoriasComponent } from './categorias/pesquisa-categorias/pesquisa-categorias.component';
import { CadastroCategoriasComponent } from './categorias/cadastro-categorias/cadastro-categorias.component';
import { PesquisaProdutosComponent } from './produtos/pesquisa-produtos/pesquisa-produtos.component';
import { CadastroProdutosComponent } from './produtos/cadastro-produtos/cadastro-produtos.component';

// array de configurações de rotas
const routes: Routes = [
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
  { path: 'categorias', component: PesquisaCategoriasComponent },
  { path: 'categorias/novo', component: CadastroCategoriasComponent },
  { path: 'categorias/:id', component: CadastroCategoriasComponent },
  { path: 'produtos', component: PesquisaProdutosComponent },
  { path: 'produtos/novo', component: CadastroProdutosComponent },
  { path: 'produtos/:id', component: CadastroProdutosComponent },
  { path: '**', redirectTo: 'pagina-nao-encontrada' } // deixar sempre por último, para que o Angular verifique todas as rotas antes de redirecionar para a pagina-nao-encontrada.
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
