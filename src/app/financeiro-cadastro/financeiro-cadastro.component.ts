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

  constructor() { }

  ngOnInit(): void {
  }

}
