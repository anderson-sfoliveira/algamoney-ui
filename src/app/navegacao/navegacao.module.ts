import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

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
    ButtonModule,
    RippleModule
  ],
  exports: [
    MenuComponent
  ]
})
export class NavegacaoModule { }
