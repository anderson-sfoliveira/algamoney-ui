import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';

import { LoginFormComponent } from './login-form/login-form.component';
import { SegurancaRoutingModule } from './seguranca-routing.module';
import { SegurancaHttpInterceptor } from './seguranca-http-interceptor';
import { AuthGuard } from './auth.guard';
import { environment } from 'src/environments/environment';

export function tokenGetter(): string {
  console.log(`Access Token do localStorage = ${localStorage.getItem('token')}`);
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter, // Adiciona o Access Token nas chamadas HTTP
        allowedDomains: ['localhost:4200'],
        disallowedRoutes: ['http://localhost:4200/oauth/token']
//        allowedDomains: [`${environment.apiURL}`],
//        disallowedRoutes: [`${environment.apiURL}/oauth/token`]
      }
    }),

    InputTextModule,
    ButtonModule,
    PasswordModule,

    SegurancaRoutingModule
  ],
  providers: [
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SegurancaHttpInterceptor,
      multi: true
    },
    AuthGuard
  ]
})
export class SegurancaModule { }
