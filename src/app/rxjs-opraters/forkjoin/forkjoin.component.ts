
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { fromEvent, zip,forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.scss']
})
export class ForkjoinComponent implements AfterViewInit {
// source
  public Name = ["Darpan","sandeep","Vikas","Yash","Preet","Pooja","Poonam","Patel","Bimal","Meet"]

  public Color = ["red","green","blue","purple","violet"]
  

   @ViewChild('name',{static:false}) public  name!:  ElementRef ;
   @ViewChild('color',{static:false}) public  color!: ElementRef;
     

  
  constructor() { }



  ngAfterViewInit(): void {
    
   const nameobs = fromEvent<any>(this.name.nativeElement, "change").pipe(
     map(event => event.target.value)
   )

   const colorobs = fromEvent<any>(this.color.nativeElement, "change").pipe(
    map(event => event.target.value)
  )

   forkJoin([nameobs,colorobs]).subscribe(([name,color])=>
   {console.log(name,color);
    debugger
    this.Box(name,color,"elcontanier2") })


   zip(nameobs,colorobs).subscribe(([name,color])=>
   
   {console.log(name,color);
    debugger
   this.Box(name,color,"elcontanier") })
  }
   


  Box(name: any,color: any,containerId: any){

    let el=document.createElement('div')
    el.innerText=name;
    el.setAttribute("class",color);
    document.getElementById(containerId)?.appendChild(el);
  }




}



