import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';

@Injectable(

)
export class SubjectsharingService {



  exclusive = new Subject<string>();


  UserName = new BehaviorSubject<string>('');
  constructor() { }
}
