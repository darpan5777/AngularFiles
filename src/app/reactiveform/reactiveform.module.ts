import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveformRoutingModule } from './reactiveform-routing.module';
import { ReactiveformComponent } from './reactiveform.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ReactiveformComponent
  ],
  imports: [
    CommonModule,
    ReactiveformRoutingModule, 
    ReactiveFormsModule
  ]
})
export class ReactiveformModule { }
