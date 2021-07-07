import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {


  allemployee: Employee[] = [];

  Url: string = ' http://localhost:3000';



  constructor(  private http: HttpClient) { }


  getAllemployee():Observable<Employee[]>{
    console.log(Employee)
    return this.http.get<Employee[]>("http://localhost:3000/Bankaccount");

  }


  public deleteaccount(id: number) {
    this.http.delete(this.Url + '/' + id).subscribe(
      data => {
        ;
      },
      error => {
       ;
      }
    );
  }
  
  public addaccount(AccountForm: FormGroup) {
    debugger
    console.log('addStudent( executed in service');
   return this.http.post(this.Url, AccountForm).subscribe(
      data => {
        console.log('POST Request is successful ', data);
      },
      error => {
        console.log('Error', error);
      }
    );

    }


}
