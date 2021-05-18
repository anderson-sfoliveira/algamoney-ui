import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';

import { LoginFormComponent } from './login-form/login-form.component';
import { SegurancaRoutingModule } from './seguranca-routing.module';

export function tokenGetter(): string {
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
        allowedDomains: ['localhost:8080'],
        disallowedRoutes: ['http://localhost:8080/oauth/token']
      }
    }),

    InputTextModule,
    ButtonModule,
    PasswordModule,

    SegurancaRoutingModule
  ],
  providers: [JwtHelperService]
})
export class SegurancaModule { }
