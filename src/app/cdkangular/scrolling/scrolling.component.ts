import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrolling',
  templateUrl: './scrolling.component.html',
  styleUrls: ['./scrolling.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollingComponent  {
  items = Array.from({length: 50}).map((_, i) => `Item #${i}`);
  
  constructor() { }

  ngOnInit(): void {
  }

}
