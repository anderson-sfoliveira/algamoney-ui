import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { promise } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthTokenURL = 'http://localhost:8080/oauth/token';
  jwtPayload: any; // objeto com as propriedades do token

  constructor(
    private http: HttpClient,
    private jwtHelperService: JwtHelperService
  ) {
    this.carregarToken();
  }

  login(usuario: string, senha: string): Promise<void> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==')
      .append('Content-Type', 'application/x-www-form-urlencoded');

    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    return this.http.post<any>(this.oauthTokenURL, body, { headers, withCredentials: true }) // withCredentials: true  =>  faz com que o navegador envie o cookie na requisição.
      .toPromise()
      .then(response => {
        this.armazenarToken(response.access_token);
      })
      .catch(response => {
        if (response.status === 400) {
          if (response.error.error === 'invalid_grant') {
            return Promise.reject('Usuário ou senha inválida!');
          }
        }

        return Promise.reject(response);
      });
  }

  private armazenarToken(token: string) {
    this.jwtPayload = this.jwtHelperService.decodeToken(token);
    localStorage.setItem('token', token);
  }

  private carregarToken() {
    const token = localStorage.getItem('token');

    if (token) {
      this.armazenarToken(token);
    }
  }

  temPermissao(permissao: string) {
    return this.jwtPayload && this.jwtPayload.authorities.includes(permissao);
  }

  temQualquerPermissao(roles) {
    for (const role of roles) {
      if (this.temPermissao(role)) {
        return true;
      }
    }

    return false;
  }

  obterNovoAccessToken(): Promise<void> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==')
      .append('Content-Type', 'application/x-www-form-urlencoded');

    const body = 'grant_type=refresh_token';

    return this.http.post<any>(this.oauthTokenURL, body, { headers, withCredentials: true }) // withCredentials: true  =>  faz com que o navegador envie o cookie na requisição.
      .toPromise()
      .then(response => {
        this.armazenarToken(response.access_token);
        console.log('Novo access token criado!');
        return Promise.resolve(null);
      })
      .catch(response => {
        console.log('Erro ao renovar token.', response);
        return Promise.resolve(null);
      })
  }

  isAccessTokenInvalido() {
    console.log('Validando access token.');
    const token = localStorage.getItem('token');

    return !token || this.jwtHelperService.isTokenExpired(token);
  }
}
