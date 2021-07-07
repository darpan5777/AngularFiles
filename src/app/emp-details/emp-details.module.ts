import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpDetailsRoutingModule } from './emp-details-routing.module';
import { EmpDetailsComponent } from './emp-details.component';
import { EmpmdetailListConteinerComponent } from './empmdetail-list-conteiner/empmdetail-list-conteiner.component';
import { EmpmdetailListPresentationComponent } from './empmdetail-list-conteiner/empmdetail-list-presentation/empmdetail-list-presentation/empmdetail-list-presentation.component';
import { EmployeeService } from './employee.service';
import { AddFormListConteinerComponent } from './add-form-list-conteiner/add-form-list-conteiner.component';
import { AddFormListPresentationComponent } from './add-form-list-conteiner/AddForm-list-presentation/add-form-list-presentation/add-form-list-presentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    EmpDetailsComponent,
    EmpmdetailListConteinerComponent,
    EmpmdetailListPresentationComponent,
    AddFormListConteinerComponent,
    AddFormListPresentationComponent
 

  
    
  ],
  imports: [
    CommonModule,
    EmpDetailsRoutingModule,FormsModule,ReactiveFormsModule
    
  ],
  providers: [EmployeeService]
})
export class EmpDetailsModule { }
