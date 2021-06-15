import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)},
  { path: 'reactive', loadChildren: () => import('./reactiveform/reactiveform.module').then(m => m.ReactiveformModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
