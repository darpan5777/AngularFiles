import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input("parentData")public Title:any;

  @Output()public childEvent = new EventEmitter();
  
  onSendMsg(){
    this.childEvent.emit('The Avengers');
  }
}

