import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankAccountFormContainerComponent } from './bank-account-form-container/bank-account-form-container.component';
import { BankAccountListContainerComponent } from './bank-account-list-container/bank-account-list-container.component';
import { BankAccountComponent } from './bank-account.component';

const routes: Routes = [
  { path: '', component: BankAccountComponent,

  
  children:[
      
    {
      path:'',
      component:BankAccountListContainerComponent
    }, {
      
      path:'Add',
      component:BankAccountFormContainerComponent
    }
  ]


},

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankAccountRoutingModule { }
