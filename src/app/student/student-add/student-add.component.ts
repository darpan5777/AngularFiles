import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { StudentService } from 'src/app/Shared/student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent implements OnInit {

  constructor(private studentservice:StudentService) { }
//addstudent(studentobj){
  //console.log(studentobj);
  //  this.studentservice.createstudent().subscribe((response)) =>{
      // console.log("student added")
  //  }

  ngOnInit(): void {


    
  }




}
