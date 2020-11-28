import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputMaskModule } from 'primeng/inputmask';

import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';

@NgModule({
  declarations: [
    CadastroEmpresaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    InputMaskModule
  ],
  exports: [
    CadastroEmpresaComponent
  ]
})
export class EmpresaModule { }
