import { Component, OnInit } from '@angular/core';
import { SubjectsharingService } from '../Shared/subjectsharing.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {


  exclusive:boolean = false;
  UserName:string='Darpan';
 
  constructor( public subjectsharing:SubjectsharingService) { 
   
  
  }

  ngOnInit( ): void { this.subjectsharing.UserName.subscribe(res  =>
    this.UserName = res
    
    )}

}
