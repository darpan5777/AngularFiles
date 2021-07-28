import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './user.model';

@Injectable()
export class UserService {
  [x: string]: any;


  Url: string = 'http://localhost:3000';


  constructor(private http: HttpClient ) { }

  public newuser(userForm: FormGroup) {
   return this.http.post( "http://localhost:3000/user", userForm).subscribe(
     );}


  
  public  UserList():Observable<User[]>{
    return this.http.get<User[]>(" http://localhost:3000/user");
}

public deleteuser(id: number) {
  this.http.delete("http://localhost:3000/user" + '/' + id).subscribe(
  );
}
}


