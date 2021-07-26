import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkangularRoutingModule } from './cdkangular-routing.module';
import { CdkangularComponent } from './cdkangular.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalComponent } from './portal/portal.component';
import { PortalModule} from '@angular/cdk/portal';
import { ScrollingComponent } from './scrolling/scrolling.component';
import { ScrollingModule} from '@angular/cdk/scrolling';
import { TableComponent } from './table/table.component';
import { ReactiveformModule } from '../reactiveform/reactiveform.module';
import { FormsModule } from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table';
import { OverlayComponent } from './overlay/overlay.component';
import {OverlayModule} from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    CdkangularComponent,
    DragDropComponent,
    PortalComponent,
    ScrollingComponent,
    TableComponent,
    OverlayComponent
  ],
  imports: [
    CommonModule,
    CdkangularRoutingModule,
    DragDropModule,
    PortalModule,
    ScrollingModule,
    CdkTableModule,
    OverlayModule
  
  
    
  ]
})
export class CdkangularModule { }
