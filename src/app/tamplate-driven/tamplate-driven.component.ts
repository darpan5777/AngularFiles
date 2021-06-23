import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tamplate-driven',
  templateUrl: './tamplate-driven.component.html',
  styleUrls: ['./tamplate-driven.component.scss']
})
export class TamplateDrivenComponent implements OnInit {
   
  FormData:any ={}; 

  constructor() { }

  ngOnInit(): void {
  }
  register(): void {
    console.log(this.FormData);
  }
}
