import { Component, OnInit } from '@angular/core';
import { SubjectsharingService } from 'src/app/Shared/subjectsharing.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {
  

  exclusive:string = "";
  UserName:string='';
  constructor(public subjectsharing:SubjectsharingService ) {
   
   }
  
  ngOnInit(): void {  this.subjectsharing.UserName.subscribe(res  =>
    this.UserName = res
    
    )}

    onchange(uname:any){
      console.log(uname.value)
      this.subjectsharing.UserName.next(uname.value)
    }
    
  }
  
  

 