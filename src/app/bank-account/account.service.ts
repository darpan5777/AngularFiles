import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { BankDetails } from './bank-details.model';

@Injectable()
export class AccountService {
     
   AccountDetails:BankDetails[]=[];

  //  search filter
   searchvalue!:string ;

  //  json url
  Url: string = 'http://localhost:3000';

  constructor( private http: HttpClient ) { }

 //  deleteAccount service
 public deleteaccount(id: number) {
    this.http.delete("http://localhost:3000/Bankaccount" + '/' + id).subscribe(
    );
  }
 //  Addaccount  service
  public newAccount(AccountForm: FormGroup) {
    debugger
    console.log('NewAccount executed in service');
   return this.http.post( "http://localhost:3000/Bankaccount", AccountForm).subscribe(
     );
    }

//  Listaccount service
  public  Accountlist():Observable<BankDetails[]>{
      console.log(BankDetails)
      return this.http.get<BankDetails[]>(" http://localhost:3000/Bankaccount");
  }

  
}

