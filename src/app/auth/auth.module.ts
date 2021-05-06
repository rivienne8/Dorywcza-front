import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { CustomersGuard } from './guards/customers.guard';
import { TokenInterceptor } from './token.interceptor';
import {RegisterComponent} from './conteiners/regiser/register.component';
import {LoginComponent} from './conteiners/login/login.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AuthRoutingModule} from './auth-routing.module';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  providers: [
    AuthGuard,
    AuthService,
    CustomersGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    AuthRoutingModule,
    MatMenuModule

  ]
})
export class AuthModule { }
