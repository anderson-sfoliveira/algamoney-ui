import { LancamentoFiltro, LancamentosService } from './../lancamentos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
  lancamentos = [];

  constructor(private lancamentosService: LancamentosService) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    const filtro: LancamentoFiltro = {
      descricao: this.descricao,
      dataVencimentoInicio: this.dataVencimentoInicio,
      dataVencimentoFim: this.dataVencimentoFim
    }

    this.lancamentosService.pesquisar(filtro)
      .then(lanc => this.lancamentos = lanc);
  }

}
