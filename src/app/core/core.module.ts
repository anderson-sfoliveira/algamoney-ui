import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandlerService } from './error-handler.service';
import { LancamentosService } from '../lancamentos/lancamentos.service';
import { CategoriasService } from '../categorias/categorias.service';
import { ProdutosService } from '../produtos/produtos.service';
import { UsuariosService } from '../usuarios/usuarios.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    ToastModule,
    ConfirmDialogModule
  ],
  exports: [
    NavbarComponent,
    ToastModule,
    ConfirmDialogModule
  ],
  providers: [
    LancamentosService,
    CategoriasService,
    ProdutosService,
    MessageService,
    ErrorHandlerService,
    ConfirmationService,
    UsuariosService,

    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ]
})
export class CoreModule { }
