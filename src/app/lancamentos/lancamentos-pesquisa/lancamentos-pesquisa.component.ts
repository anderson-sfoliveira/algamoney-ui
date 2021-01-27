import { LancamentosService } from './../lancamentos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  descricao: string;
  lancamentos = [];

  constructor(private lancamentosService: LancamentosService) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.lancamentosService.pesquisar({ descricao: this.descricao })
      .then(lanc => this.lancamentos = lanc);
  }

}
