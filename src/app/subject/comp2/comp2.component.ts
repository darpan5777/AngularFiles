import { Component, OnInit } from '@angular/core';
import { SubjectsharingService } from 'src/app/Shared/subjectsharing.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {
  UserName:string='';
  constructor(public subjectsharing:SubjectsharingService ) { }

  ngOnInit(): void {  this.subjectsharing.UserName.subscribe(res  =>
    this.UserName = res
    
    )}
    
    onchange(uname:any){
      console.log(uname.value)
      this.subjectsharing.UserName.next(uname.value)
    }
  }
  