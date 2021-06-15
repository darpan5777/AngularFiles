import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Student } from 'src/app/Model/student';
import { StudentService } from 'src/app/Shared/student.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  public currentstudent: Student | any;
  // currentstudent: any = {
  //   id: '',
  
  //   add: '',
  //   city: '',
  //   state: '',  
  // }
  public studentId: any = '';
  constructor(public studentservice: StudentService,
    public activeRoute: ActivatedRoute,
    public router: Router
  ) {
    this.studentId = this.activeRoute.snapshot.paramMap.get('id');
    if (this.studentId) {
      this.getStudentDetail(this.studentId)
    }

  }

  ngOnInit(): void {

  }

  getStudentDetail(id: any) {
    this.studentservice.getStudentById(id).subscribe((item) => {
      debugger
      this.currentstudent = item
    })
  }

  createstudent(student: Student) {
    if (this.studentId) {
      debugger
      this.studentservice.updatestudent(student).subscribe(
        (result: Student) => {
          this.studentservice.getAllstudent();

        })
    } else {
      this.studentservice.createstudent(student).subscribe(
        (result: Student) => {
          this.studentservice.getAllstudent();

        })
    }
  }




}



