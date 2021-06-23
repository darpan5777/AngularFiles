import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.scss']
})
export class IncrementComponent implements OnInit {

  constructor() { }
  fruits = ['mango','pineapple','apple','banana','kiwi'];

  
  ngOnInit(): void {
    
  }

  quantity:number=1;
  i=1
  increment(){
    if(this.i !=10){
      this.i++;
      this.quantity=this.i;
    }
    }
     decrement() {
        if(this.i !=1){
          this.i--;
          this.quantity=this.i;
    
        }
      }}
