import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MVPstudentRoutingModule } from './mvpstudent-routing.module';
import { MVPstudentComponent } from './mvpstudent.component';
import { StudentExamsPresentationComponent } from './Student-exams-container/student-exams-presentation/student-exams-presentation/student-exams-presentation.component';
import { StudentListPresentationComponent } from './Student-list-container/student-list-presentation/student-list-presentation/student-list-presentation.component';

@NgModule({
  declarations: [
    MVPstudentComponent,
    StudentExamsPresentationComponent,
    StudentListPresentationComponent,

  ],
  imports: [
    CommonModule,
    MVPstudentRoutingModule
  ]
})
export class MVPstudentModule { }
