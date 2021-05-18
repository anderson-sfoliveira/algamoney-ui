import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private errorHandlerService: ErrorHandlerService,
    private router: Router // router = roteador
  ) { }

  ngOnInit(): void {
  }

  login(usuario: string, senha: string) {
    this.authService.login(usuario, senha)
      .then(() => {
        this.router.navigate(['/produtos']);
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }
}
