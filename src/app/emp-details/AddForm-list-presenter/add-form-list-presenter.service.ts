import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { Employee } from '../employee.model';

@Injectable()
export class AddFormListPresenterService {

public accountData: Subject<Employee[]> = new Subject();
  public accountData$: Observable<Employee[]>;
  
  constructor(public fb:FormBuilder) {  
    this.accountData$ = this.accountData.asObservable();
  
  }


  
  public BindForm() {
    return new FormGroup({ 
      
      id: new FormControl(),
      AccountNo: new FormControl('',[ Validators.required, Validators.minLength(15)]),
           Name: new FormControl('',[ Validators.required,]),
         Email: new FormControl('', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
        PhoneNo: new FormControl('', [Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
       BankName: new FormControl(),
       Gender : new FormControl(),
        Address: new FormControl('',  [Validators.required,]),
      Amount: new FormControl('', [Validators.required,])
    });
  }
public accountDetails(AccountForm: FormGroup) {
    this.accountData.next(AccountForm.value);
    } 
    
  }
