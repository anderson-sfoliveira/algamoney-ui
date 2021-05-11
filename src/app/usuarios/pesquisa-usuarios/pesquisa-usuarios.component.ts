import { Component, OnInit, ViewChild } from '@angular/core';

import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';

import { UsuariosService, UsuarioFiltro } from '../usuarios.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-pesquisa-usuarios',
  templateUrl: './pesquisa-usuarios.component.html',
  styleUrls: ['./pesquisa-usuarios.component.css']
})
export class PesquisaUsuariosComponent implements OnInit {

  totalRegistros = 0;
  filtro = new UsuarioFiltro();
  usuarios = [];
  @ViewChild('tabela') grid;

  constructor(
    private usuariosService: UsuariosService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private errorHandlerService: ErrorHandlerService
  ) { }

  ngOnInit() {
//    this.pesquisar();
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.usuariosService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.usuarios = resultado.usuarios;
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmaExclusao(usuario: any) {
    this.confirmationService.confirm({
      message: 'Confirma exclusão do usuário?',
      accept: () => {
        this.excluir(usuario);
      }
    });
  }

  excluir(usuario: any) {
    this.usuariosService.excluir(usuario.usuarioId)
      .then(() => {
        this.grid.clear(); // recarrega as informações da grid
        
        this.messageService.add({ severity: 'success', summary: 'BRL Sistemas', detail: 'Usuário excluído com sucesso!' });
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  mudarStatus(usuario: any) {
    const novoStatus = !usuario.ativo;

    this.usuariosService.mudarStatus(usuario.usuarioId, novoStatus)
      .then(() => {
        usuario.ativo = novoStatus;

        const acao = novoStatus ? 'ativado' : 'desativado';
        this.messageService.add({ severity: 'success', summary: 'BRL Sistemas', detail: `Usuário ${acao} com sucesso!` });
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }
}
