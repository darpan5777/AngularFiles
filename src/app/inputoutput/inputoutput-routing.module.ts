import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputoutputComponent } from './inputoutput.component';

const routes: Routes = [{ path: '', component: InputoutputComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputoutputRoutingModule { }
