import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { from, Observable } from "rxjs";
import { mergeMap } from "rxjs/operators";

import { AuthService } from "./auth.service";

@Injectable()
export class SegurancaHttpInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    /*
     * Primeiramente fazemos duas validações, uma pra saber se não estamos nos referindo ao path "/oauth/token" e
     * outra para sabermos se o nosso token está inválido.
     * 
     * 1) Se o path for /oauth/token
     *    Neste caso, estamos fazendo uma busca por um token válido, o que significa que nosso token atual já foi invalidado.
     *    Se não validarmos o request para este path, entraremos em um loop infinito.
     * 
     * 2) Se o token está inválido
     *    Aqui checamos se nosso token está inválido, e se estiver, precisamos obter um novo, através do "/oauth/token"
     */
    if (!req.url.includes('/oauth/token') && this.auth.isAccessTokenInvalido()) {
      return from(this.auth.obterNovoAccessToken())
        .pipe(
          mergeMap(() => {
            req = req.clone({
              setHeaders: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
              }
            });

            return next.handle(req);
          })
        );
    }

    return next.handle(req);
  }
}