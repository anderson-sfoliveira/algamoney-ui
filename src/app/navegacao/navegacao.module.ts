import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { BotoesModule } from '../botoes/botoes.module';



@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    BotoesModule
  ],
  exports: [MenuComponent]
})
export class NavegacaoModule { }
