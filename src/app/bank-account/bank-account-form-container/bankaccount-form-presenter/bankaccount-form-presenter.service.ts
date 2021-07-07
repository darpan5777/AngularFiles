import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from 'src/app/emp-details/employee.model';

@Injectable()
export class BankaccountFormPresenterService {



  //  accountdata pass using subject
  public accountData: Subject<Employee[]> = new Subject();
  public accountData$: Observable<Employee[]>;
  
  constructor() {  
    this.accountData$ = this.accountData.asObservable();
  }



// Binding Form
   public BindForm() {
    return new FormGroup({ 
      AccountNo: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(5)]),
      Name: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      Email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      phoneno: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]),
      BankName: new FormControl('', [Validators.required]),
      Gender: new FormControl('', [Validators.required]),
      Address: new FormControl('', [Validators.required]),
      Amount: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      Currency: new FormControl('', [Validators.required])

     });
   }
    
  //  AccountForm set in FormGroup 
   public accountDetails(AccountForm: FormGroup) {
    this.accountData.next(AccountForm.value);
    }
  
}
  

