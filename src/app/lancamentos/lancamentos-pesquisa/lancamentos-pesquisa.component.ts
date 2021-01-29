import { LancamentoFiltro, LancamentosService } from './../lancamentos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  filtro = new LancamentoFiltro();
  lancamentos = [];

  constructor(private lancamentosService: LancamentosService) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.lancamentosService.pesquisar(this.filtro)
      .then(resultado => {
        this.lancamentos = resultado.lancamentos;
      });
  }

}
