import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankAccountRoutingModule } from './bank-account-routing.module';
import { BankAccountComponent } from './bank-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BankAccountFormContainerComponent } from './bank-account-form-container/bank-account-form-container.component';
import { BankaccountFormPresentationComponent } from './bank-account-form-container/bankaccount-form-presentation/bankaccount-form-presentation.component';
import { BankAccountListContainerComponent } from './bank-account-list-container/bank-account-list-container.component';
import { BankaccountListPresentationComponent } from './bank-account-list-container/bankaccount-list-presentation/bankaccount-list-presentation.component';
import { AccountService } from './account.service';
import { BankaccountFormPresenterService } from './bank-account-form-container/bankaccount-form-presenter/bankaccount-form-presenter.service';
import { SearchfilterPipe } from './searchfilter.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    BankAccountComponent,
    BankAccountFormContainerComponent,
    BankaccountFormPresentationComponent,
    BankAccountListContainerComponent,
    BankaccountListPresentationComponent,
    SearchfilterPipe,
  
 

  ],
  imports: [
    CommonModule,
    BankAccountRoutingModule,
    FormsModule,ReactiveFormsModule,HttpClientModule
    

  ]
  ,providers:[AccountService,BankaccountFormPresenterService]
})
export class BankAccountModule { }
