import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdkangularComponent } from './cdkangular.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { OverlayComponent } from './overlay/overlay.component';
import { PortalComponent } from './portal/portal.component';
import { ScrollingComponent } from './scrolling/scrolling.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: '', component: CdkangularComponent },
  {
    path: 'Drag',
    component: DragDropComponent
  },
  {
    path: 'Portal',
    component: PortalComponent 
  }
,
{
  path:'Scrolling',
  component:ScrollingComponent
},
{
  path:'cdk-table',
  component:TableComponent
},
{
  path:'Overlay',
  component:OverlayComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CdkangularRoutingModule { }
