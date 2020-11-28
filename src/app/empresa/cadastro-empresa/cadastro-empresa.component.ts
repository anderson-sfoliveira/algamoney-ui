import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html',
  styleUrls: ['./cadastro-empresa.component.css']
})
export class CadastroEmpresaComponent implements OnInit {

  tipos = [
    { label: 'Física',   value: 'FISICA' },
    { label: 'Jurídica', value: 'JURIDICA' }
  ];

  ativos = [
    { label: 'Ativo',   value: 'true' },
    { label: 'Inativo', value: 'false' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
