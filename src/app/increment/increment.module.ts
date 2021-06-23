import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncrementRoutingModule } from './increment-routing.module';
import { IncrementComponent } from './increment.component';


@NgModule({
  declarations: [
    IncrementComponent
  ],
  imports: [
    CommonModule,
    IncrementRoutingModule
  ]
})
export class IncrementModule { }
