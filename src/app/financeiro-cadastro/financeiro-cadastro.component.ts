import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financeiro-cadastro',
  templateUrl: './financeiro-cadastro.component.html',
  styleUrls: ['./financeiro-cadastro.component.css']
})
export class FinanceiroCadastroComponent implements OnInit {

  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' }
  ];

  categorias = [
    { label: 'Alimentação', value: 1 },
    { label: 'Transporte', value: 2 },
  ];

  pessoas = [
    { label: 'João da Silva', value: 1 },
    { label: 'Sebastião Souza', value: 2 },
    { label: 'Maria Abadia', value: 3 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
