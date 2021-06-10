import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentService } from '../Shared/student.service';



@NgModule({
  declarations: [StudentAddComponent,StudentListComponent] ,
  // exports: [StudentAddComponent,StudentListComponent],
 
  imports: [
    CommonModule
  ],
  providers :[StudentService]
})
export class StudentModule { }
