import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from '../Model/student';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  allstudent: Student[] = [];

  mockUrl: string = 'http://localhost:3000/Student';




  constructor(
    private http: HttpClient


  ) { }
  getAllstudent(): Observable<Student[]> {
    console.log(Student)
    return this.http.get<Student[]>("http://localhost:3000/Student");

  }

  createstudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.mockUrl, student, headerOption);
  }

  updatestudent(student: Student): Observable<Student> {
    debugger
    return this.http.put<Student>(this.mockUrl + '/' + student.id, student, headerOption);
  }

  deletestudent(id: string): Observable<Student> {
    return this.http.delete<Student>(this.mockUrl + '/' + id, headerOption);
  }

  getStudentById(id: string): Observable<Student> {
    return this.http.get<Student>(this.mockUrl + '/' + id);
  }

}
