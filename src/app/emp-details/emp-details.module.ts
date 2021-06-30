import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpDetailsRoutingModule } from './emp-details-routing.module';
import { EmpDetailsComponent } from './emp-details.component';
import { EmpmdetailListConteinerComponent } from './empmdetail-list-conteiner/empmdetail-list-conteiner.component';
import { EmpmdetailListPresentationComponent } from './empmdetail-list-conteiner/empmdetail-list-presentation/empmdetail-list-presentation/empmdetail-list-presentation.component';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    EmpDetailsComponent,
    EmpmdetailListConteinerComponent,
    EmpmdetailListPresentationComponent,
  
    
  ],
  imports: [
    CommonModule,
    EmpDetailsRoutingModule
  ],
  providers: [EmployeeService]
})
export class EmpDetailsModule { }
