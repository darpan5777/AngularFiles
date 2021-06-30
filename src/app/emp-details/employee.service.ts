import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
  allemployee: Employee[] = [];

  Url: string = ' http://localhost:3000';



  constructor(  private http: HttpClient) { }


  getAllemployee():Observable<Employee[]>{
    console.log(Employee)
    return this.http.get<Employee[]>("http://localhost:3000/emp");

  }



}
