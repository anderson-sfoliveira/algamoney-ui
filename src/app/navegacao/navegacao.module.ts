import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { LinhaComponent } from './linha/linha.component';
import { NavbarComponent } from './navbar/navbar.component';

import { BotoesModule } from '../botoes/botoes.module';

@NgModule({
  declarations: [
    MenuComponent,
    LinhaComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    BotoesModule
  ],
  exports: [
    MenuComponent,
    NavbarComponent
  ]
})
export class NavegacaoModule { }
