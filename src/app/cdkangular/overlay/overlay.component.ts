import { GlobalPositionStrategy, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { DragDropComponent } from '../drag-drop/drag-drop.component';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  [x: string]: any;
  isOpen = false;



  constructor(private overlay:Overlay) { }
  

  public createoverlay():void{
    const overConfiguration: OverlayConfig = new OverlayConfig ({
      hasBackdrop:true,
      backdropClass:'',
      positionStrategy:new  GlobalPositionStrategy().centerHorizontally().centerVertically()
    });
    this.overlayRef= this.overlay.create(overConfiguration);
    this.componentoverlayRef = this.overlayRef.attach(
      new ComponentPortal(DragDropComponent)

    );
    this.overlayRef.backdropClick().subscribe(()=>
    {this.overlayRef.detach()
    });
  }
  ngOnInit(): void {
  }

}
