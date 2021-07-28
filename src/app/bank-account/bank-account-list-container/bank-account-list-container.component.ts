import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-bank-account-list-container',
  templateUrl: './bank-account-list-container.component.html',
  styleUrls: ['./bank-account-list-container.component.scss']
})
export class BankAccountListContainerComponent implements OnInit {
    
  public BankAccountList$: Observable<any> = of();


 // api service 
  constructor( private Accountservice:AccountService) {
    this.BankAccountList$ = this.Accountservice.Accountlist();
   }


 

  ngOnInit(): void {
  }
    //delete id 
  public onDeleteId(id: number) {
   return this.Accountservice.deleteaccount(id)
  }
}
