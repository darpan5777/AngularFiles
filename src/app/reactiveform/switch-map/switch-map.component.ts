import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

  public counter = 0;

  public ListofMembers = ['darpan','vishal','nidhi','kiran','darsh','bhavink','ankit','parth'];

  public  listresult:any = [];

  public search = new FormControl();

  constructor() { 

  }

  ngOnInit(): void {


    this.search.valueChanges.pipe(
      debounceTime(3000), 
      switchMap((value)=> this.ListofMembers.filter((item)=> item.includes(value)))
    ).subscribe((filterdata: any)=>{
      this.listresult.push(filterdata)
    })

  }}