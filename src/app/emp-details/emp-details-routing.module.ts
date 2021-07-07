import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormListConteinerComponent } from './add-form-list-conteiner/add-form-list-conteiner.component';
import { EmpDetailsComponent } from './emp-details.component';
import { EmpmdetailListConteinerComponent } from './empmdetail-list-conteiner/empmdetail-list-conteiner.component';

const routes: Routes = [
  { path: '', 
  component: EmpDetailsComponent,

  children:[
      
    {
      path:'',
      component:EmpmdetailListConteinerComponent
    },
    {
      path:'add',
      component:AddFormListConteinerComponent
    }
  ]
}
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpDetailsRoutingModule { }
