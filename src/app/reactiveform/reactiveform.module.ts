import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveformRoutingModule } from './reactiveform-routing.module';
import { ReactiveformComponent } from './reactiveform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwitchMapComponent } from './switch-map/switch-map.component';

@NgModule({
  declarations: [
    ReactiveformComponent,
    SwitchMapComponent
  ],
  imports: [
    CommonModule,
    ReactiveformRoutingModule, 
    ReactiveFormsModule,FormsModule
  ]
})
export class ReactiveformModule { }
