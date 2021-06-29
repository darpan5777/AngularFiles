import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsOpratersComponent } from './rxjs-opraters.component';

const routes: Routes = [
  { path: '', component: RxjsOpratersComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsOpratersRoutingModule { }
