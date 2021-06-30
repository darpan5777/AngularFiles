import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpDetailsComponent } from './emp-details.component';
import { EmpmdetailListConteinerComponent } from './empmdetail-list-conteiner/empmdetail-list-conteiner.component';

const routes: Routes = [
  { path: '', 
  component: EmpDetailsComponent,

  children:[
      
    {
      path:'',
      component:EmpmdetailListConteinerComponent
    }
  ]
}
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpDetailsRoutingModule { }
