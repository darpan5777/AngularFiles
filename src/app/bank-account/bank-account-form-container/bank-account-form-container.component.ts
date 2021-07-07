import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-bank-account-form-container',
  templateUrl: './bank-account-form-container.component.html',
  styleUrls: ['./bank-account-form-container.component.scss']
})
export class BankAccountFormContainerComponent implements OnInit {

  constructor( private Accountservice:AccountService) { }

  ngOnInit(): void {
  }
  public onaddaccount(AccountForm: FormGroup) {
    debugger
    console.log();
    this.Accountservice.newAccount(AccountForm);
  }
}
