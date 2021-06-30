import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { Employee } from '../../employee.model';
import { EmployeeService } from '../../employee.service';

@Injectable()
export class EmpmdetailListPresenterService {
 

  public empId:Subject<any> = new Subject();

  constructor( private employeeservice:EmployeeService) { }


   
  salary(salary: any): void {
    if ( salary === 10000 ) {
      this.empId.next(this.employeeservice.allemployee);
    } else {
      this.empId.next(this.employeeservice.allemployee);
    }
  }

  }

