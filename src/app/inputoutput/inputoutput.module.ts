import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputoutputRoutingModule } from './inputoutput-routing.module';
import { InputoutputComponent } from './inputoutput.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    InputoutputComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    InputoutputRoutingModule
  ]
})
export class InputoutputModule { }
