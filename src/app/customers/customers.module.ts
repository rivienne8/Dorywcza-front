import {NgModule} from '@angular/core';
import {CustomersComponent} from './conteiners/customers/customers.component';
import {CommonModule} from '@angular/common';
import {CustomersRoutingModule} from './customers-routing.module';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [CustomersComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatButtonModule
  ]
})
export class CustomersModule { }
