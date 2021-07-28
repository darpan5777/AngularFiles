import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { User } from '../../user.model';

@Injectable()
export class UserFormPresenterService {

  public userData: Subject<User[]> = new Subject();
  public userData$: Observable<User[]> ;
  

 
  constructor(  ) { this.userData$ = this.userData.asObservable()}



  public BindForm() {
    return new FormGroup({ 
      FirstName: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(5)]),
      LastName: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      Email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      ContactNo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]),
      ClientName: new FormControl('', [Validators.required]),
      Office: new FormControl('', [Validators.required]),

     });
   }

  public userDetails(userForm: FormGroup) {
    this.userData.next(userForm.value);
    }
}
