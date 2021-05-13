import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { InputMaskModule } from 'primeng/inputmask';

import { PesquisaCategoriasComponent } from './pesquisa-categorias/pesquisa-categorias.component';
import { CadastroCategoriasComponent } from './cadastro-categorias/cadastro-categorias.component';
import { SharedModule } from '../shared/shared.module';
import { CategoriasRoutingModule } from './categorias-routing.module';

@NgModule({
  declarations: [
    PesquisaCategoriasComponent,
    CadastroCategoriasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputNumberModule,
    CheckboxModule,
    InputMaskModule,

    SharedModule,
    CategoriasRoutingModule
  ],
  exports: []
})
export class CategoriasModule { }
