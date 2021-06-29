import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MVPstudentComponent } from './mvpstudent.component';

const routes: Routes = [{ path: '', component: MVPstudentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MVPstudentRoutingModule { }
