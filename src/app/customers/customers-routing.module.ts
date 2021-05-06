import {RouterModule, Routes} from '@angular/router';
import {CustomersComponent} from './conteiners/customers/customers.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class CustomersRoutingModule { }
