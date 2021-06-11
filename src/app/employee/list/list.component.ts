import { Component, OnInit} from '@angular/core';
import { Student } from 'src/app/Model/student';
import { StudentService } from 'src/app/Shared/student.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  allstudent: Student[] = [];
  constructor(private studentservice:StudentService) { }

  ngOnInit(): void {this.getAllstudent
  }
  getAllstudent(){
    debugger
    this.studentservice.getAllstudent().subscribe(

      (data:Student[]) => {
        console.log(this.allstudent);
        this.allstudent = data;
        
      }
    )
   }
}
