import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { BankaccountFormPresenterService } from '../bankaccount-form-presenter/bankaccount-form-presenter.service';

@Component({
  selector: 'app-bankaccount-form-presentation',
  templateUrl: './bankaccount-form-presentation.component.html',
  styleUrls: ['./bankaccount-form-presentation.component.scss']
})
export class BankaccountFormPresentationComponent implements OnInit {


  public AccountForm: FormGroup;
        // output data 
  @Output() addaccount: EventEmitter<any> = new EventEmitter();
                          // presenter service
  constructor(private BankaccountFormPresenterService: BankaccountFormPresenterService) {
    this.AccountForm = this.BankaccountFormPresenterService.BindForm();
  }

  
  ngOnInit(): void { this.BankaccountFormPresenterService.accountData$.subscribe(
        (addaccount) => this.addaccount.emit(addaccount)
      );
  }
    // formcontrol 
  get AccountFormControl() {
    return this.AccountForm.controls;
  }
      // submit event
  public Submit() {
   return this.BankaccountFormPresenterService.accountDetails(this.AccountForm)
  }

}