import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)},
  { path: 'reactive', loadChildren: () => import('./reactiveform/reactiveform.module').then(m => m.ReactiveformModule) },
   { path: 'subject', loadChildren: () => import('./subject/subject.module').then(m => m.SubjectModule) },
//  { path: 'inputoutput', loadChildren: () => import('./inputoutput/inputoutput.module').then(m => m.InputoutputModule) },

  { path: 'Directives', loadChildren: () => import('./directives/directives.module').then(m => m.DirectivesModule) },

  { path: 'increment', loadChildren: () => import('./increment/increment.module').then(m => m.IncrementModule) },

  { path: 'inputoutput', loadChildren: () => import('./inputoutput/inputoutput.module').then(m => m.InputoutputModule) },

  { path: 'Tamplate-driven', loadChildren: () => import('./tamplate-driven/tamplate-driven.module').then(m => m.TamplateDrivenModule) },

  { path: 'RxjsOpraters', loadChildren: () => import('./rxjs-opraters/rxjs-opraters.module').then(m => m.RxjsOpratersModule) },

  { path: 'Mvpstudent', loadChildren: () => import('./mvpstudent/mvpstudent.module').then(m => m.MVPstudentModule) },

  { path: 'EmpDetails', loadChildren: () => import('./emp-details/emp-details.module').then(m => m.EmpDetailsModule) },

  { path: 'BankAccount', loadChildren: () => import('./bank-account/bank-account.module').then(m => m.BankAccountModule) },

  { path: 'TemplateOutlet', loadChildren: () => import('./template-outlet/template-outlet.module').then(m => m.TemplateOutletModule) },


  { path: 'Outletcontext', loadChildren: () => import('./outletcontext/outletcontext.module').then(m => m.OutletcontextModule) },

  { path: 'cdkangular', loadChildren: () => import('./cdkangular/cdkangular.module').then(m => m.CdkangularModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
