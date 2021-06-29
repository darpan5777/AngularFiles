import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule,} from '@angular/forms';
import { RxjsOpratersRoutingModule } from './rxjs-opraters-routing.module';
import { RxjsOpratersComponent } from './rxjs-opraters.component';
import { MapserviceService } from './mapservice.service';
import { combineLatest } from 'rxjs';
import { CombinelatestComponent } from './combinelatest/combinelatest.component';

import { ReactiveformModule } from '../reactiveform/reactiveform.module';
import { ConcatmapComponent } from './concatmap/concatmap.component';




@NgModule({
  declarations: [
    RxjsOpratersComponent,
    CombinelatestComponent,
    ConcatmapComponent,
  

  ],
  imports: [
    CommonModule,
    RxjsOpratersRoutingModule,ReactiveformModule,
    FormsModule
    

  

  ]
  ,providers:[ MapserviceService]
})
export class RxjsOpratersModule { }
