import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoAlertaComponent } from './botao-alerta/botao-alerta.component';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';



@NgModule({
  declarations: [BotaoAlertaComponent],
  imports: [
    CommonModule,

    ButtonModule,
    RippleModule
  ],
  exports: [BotaoAlertaComponent]
})
export class BotoesModule { }
