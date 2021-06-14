
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

  ngOnInit(): void {
   this.getAllstudent();
  }
   getAllstudent() {
    console.log(this.studentservice)
    this.studentservice.getAllstudent().subscribe(
      (data:Student[]) =>{
        this.allstudent = data;
      }
    )
  }

  
  // editstudent(student:any) {
  //   console.log(student)
  //   this.studentservice.currentstudent = Object.assign({}, student);
  
  // }
  
  deletestudent(id: string) {
    console.log(id)
    this.studentservice.deletestudent(id).subscribe(
      (data) => {
        this.getAllstudent();
        
      });
    }
  
 
}
