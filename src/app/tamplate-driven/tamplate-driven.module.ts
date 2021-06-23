import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TamplateDrivenRoutingModule } from './tamplate-driven-routing.module';
import { TamplateDrivenComponent } from './tamplate-driven.component';


@NgModule({
  declarations: [
    TamplateDrivenComponent
  ],
  imports: [
    CommonModule,
    TamplateDrivenRoutingModule,FormsModule
  ]
})
export class TamplateDrivenModule { }
