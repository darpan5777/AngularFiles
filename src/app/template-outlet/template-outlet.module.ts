import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateOutletRoutingModule } from './template-outlet-routing.module';
import { TemplateOutletComponent } from './template-outlet.component';
import { AddressContainerComponent } from './address-container/address-container.component';
import { AddressPresentationComponent } from './address-container/address-presentation/address-presentation.component';
import { EmployeesContainerComponent } from './employees-container/employees-container.component';
import { EmployeesPresentationComponent } from './employees-container/employees-presentation/employees-presentation.component';
import { DatatableContainerComponent } from './datatable-container/datatable-container.component';
import { DatatablePresentationComponent } from './datatable-container/datatable-presentation/datatable-presentation.component';


@NgModule({
  declarations: [
    TemplateOutletComponent,
    AddressContainerComponent,
    AddressPresentationComponent,
    EmployeesContainerComponent,
    EmployeesPresentationComponent,
    DatatableContainerComponent,
    DatatablePresentationComponent
  ],
  imports: [
    CommonModule,
    TemplateOutletRoutingModule
  ]
})
export class TemplateOutletModule { }
