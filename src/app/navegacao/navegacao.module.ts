import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';

import { BotaoAlertaComponent } from './botao-alerta/botao-alerta.component';
import { LinhaComponent } from './linha/linha.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    BotaoAlertaComponent,
    LinhaComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    MenuComponent
  ]
})
export class NavegacaoModule { }
