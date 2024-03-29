import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { Lancamento } from './../../core/model';
import { Component, OnInit } from '@angular/core';

import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { PessoaService } from 'src/app/pessoas/pessoa.service';
import { CategoriasService } from './../../categorias/categorias.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { LancamentosService } from '../lancamentos.service';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  lancamento: Lancamento = new Lancamento();

  categorias: any[] = [];
  pessoas: any[] = []

  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' },
  ];


    constructor(
    private categoriasService: CategoriasService,
    private pessoaService: PessoaService,
    private lancamentosService: LancamentosService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Novo lançamento');
    const codigoLancamento = this.route.snapshot.params['codigo'];

    if (codigoLancamento) {
      this.carregarLancamento(codigoLancamento)
    }

    this.carregarCategorias()
    this.carregarPessoas()
  }

  get editando() {
    return Boolean(this.lancamento.codigo)
  }

  carregarLancamento(codigo: number) {
    this.lancamentosService.buscarPorCodigo(codigo)
      .then(lancamento => {
        this.lancamento = lancamento;
        this.atualizarTituloEdicao();
      },
      erro => this.errorHandler.handle(erro));
  }

  carregarCategorias() {
    return this.categoriasService.listarTodas()
      .then(categorias => {
        this.categorias = categorias
          .map((c:any) => ({ label: c.nome, value: c.codigo }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarPessoas() {
    this.pessoaService.listarTodas()
      .then(pessoas => {
        this.pessoas = pessoas
          .map((p:any) => ({ label: p.nome, value: p.codigo }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: NgForm) {
    if (this.editando) {
      this.atualizarLancamento(form)
    } else {
      this.adicionarLancamento(form)
    }
  }

  atualizarLancamento(form: NgForm) {
    this.lancamentosService.atualizar(this.lancamento)
      .then((lancamento:Lancamento) => {
          this.lancamento = lancamento;
          this.messageService.add({ severity: 'success', detail: 'Lançamento alterado com sucesso!' });
          this.atualizarTituloEdicao();
        }
      ).catch(erro => this.errorHandler.handle(erro))
  }

  adicionarLancamento(form: NgForm) {
    this.lancamentosService.adicionar(this.lancamento)
      .then(lancamentoAdicionado => {
        this.messageService.add({ severity: 'success', detail: 'Lançamento adicionado com sucesso!' });

        this.router.navigate(['/lancamentos', lancamentoAdicionado.codigo]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  novo(lancamentoForm: NgForm) {
    lancamentoForm.reset(new Lancamento);

    this.router.navigate(['lancamentos/novo']);
  }

  private atualizarTituloEdicao() {
    this.title.setTitle(`Edição de lançamento: ${this.lancamento.descricao}`);
  }
}
