import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputoutput',
  templateUrl: './inputoutput.component.html',
  styleUrls: ['./inputoutput.component.scss']
})
export class InputoutputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public Title = "Thor";
  public Newtitle ="";


}
