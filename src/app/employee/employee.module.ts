import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { StudentService } from '../Shared/student.service';


@NgModule({
  declarations: [
    EmployeeComponent,
    AddComponent,
    ListComponent,
    
  ],
  providers:[StudentService],
  imports: [
    CommonModule
,EmployeeRoutingModule ,FormsModule
  ]
})
export class EmployeeModule { }
