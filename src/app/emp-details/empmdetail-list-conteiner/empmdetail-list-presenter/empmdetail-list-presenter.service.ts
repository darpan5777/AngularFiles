import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { Employee } from '../../employee.model';
import { EmployeeService } from '../../employee.service';

@Injectable()
export class EmpmdetailListPresenterService {
 

  public accountId$:Observable<any>
  public accountId: Subject<any> = new Subject();

  
  constructor( private employeeservice:EmployeeService) {
    this.accountId$ = this.accountId.asObservable();
   }


  public  deleteaccount(Id: number) {
    debugger
    console.log('delete Id', Id);
    // this.accountId$.next(Id);
  }
  
  }

