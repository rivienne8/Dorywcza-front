import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';
import {LoginComponent} from './conteiners/login/login.component';
import {RegisterComponent} from './conteiners/regiser/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AuthRoutingModule { }
