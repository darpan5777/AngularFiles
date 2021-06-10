import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import {HttpClientModule,HttpHeaders } from '@angular/common/http';
import { Student } from '../Model/student';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  mockUrl:string = 'http://localhost:3000/Student';

  constructor( 
     private http : HttpClientModule

  ) { }
  
  getAllEmployee():Observable<Student> {
    return of()
    // return this.http.get<Student[]>(this.mockUrl, headerOption);
}


}



//createstudent(student: Student): Observable<Student0> {
 // return this.http.post<Student>(this.mockUrl, student, headerOption);
//}