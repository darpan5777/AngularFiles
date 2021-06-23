import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncrementComponent } from './increment.component';

const routes: Routes = [{ path: '', component: IncrementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncrementRoutingModule { }
