import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';


@Injectable()
export class BankaccountListPresenterService {

    //  Observable id
  public BankaccountId$: Observable<any>;
  // send id using subject
  public BankaccountId: Subject<any> = new Subject();


  constructor( ) { 
    this.BankaccountId$= this.BankaccountId.asObservable();
  }

  // delete account by id 
  public deleteaccount(id: number) {
   return this.BankaccountId.next(id);
  }

}
