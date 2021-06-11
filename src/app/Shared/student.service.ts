import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import { Student } from '../Model/student';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  allstudent: Student[] = [];

 // mockUrl:string = 'http://localhost:3000/Student';

  constructor( 
     private http : HttpClient

  ) { }
  getAllstudent():Observable<Student[]> {
    debugger
   return this.http.get<Student[]>("http://localhost:3000/Student"); 
   
}



}
