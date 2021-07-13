import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutletcontextRoutingModule } from './outletcontext-routing.module';
import { OutletcontextComponent } from './outletcontext.component';
import { AddressContainerComponent } from './address-container/address-container.component';
import { EmployeesContainerComponent } from './employees-container/employees-container.component';
import { DatatableContainerComponent } from './datatable-container/datatable-container.component';


@NgModule({
  declarations: [
    OutletcontextComponent,
    AddressContainerComponent,
    EmployeesContainerComponent,
    DatatableContainerComponent
  ],
  imports: [
    CommonModule,
    OutletcontextRoutingModule
  ]
})
export class OutletcontextModule { }
