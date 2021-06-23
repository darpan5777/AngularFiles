import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  Price = 75;

  Dateofformat = "05-06-2021";

  value = 12.45;

  Name = "1Rivet";

  value1 = 12;
  
  Title = "This Is 1Rivet"; 

  employee = [
    { id:"1",
      firstName: "darpan",
     lastName: "parmar",
     country: "INIDA",
     currency: "INR"},

     {id:"2",
     firstName: "Rack",
     lastName: "Jackon",
     country: "USA",
     currency: "USD"},

     {id:"3",
     firstName: "VIVEK",
     lastName: "patel",
     country: "INIDA",
     currency: "INR"},

     {id:"4",
      firstName: "jack",
     lastName: "ross",
     country: "CANADA",
     currency: "Doller"},

     {id:"5",
    firstName: "vimal",
     lastName: "dhingra",
     country: "INIDA",
     currency: "INR"},

     {id:"6",
     firstName: "komal",
     lastName: "shiha",
     country: "INIDA",
     currency: "INR"},

     { id:"7",
      firstName: "luis",
     lastName: "phillip",
     country: "INIDA",
     currency: "INR"},

     {id:"8",
     firstName: "satish",
     lastName: "parmar",
     country: "INIDA",
     currncy: "INR"},

     { id:"9", 
       firstName: "vikas",
     lastName: "Jackon",
     country: "USA",
     currncy: "USD"},

     {id:"10",
     firstName: "vinod",
     lastName: "pawar",
     country: "DUBAI",
     currency: "DINAR"},
 ]

  ngOnInit(): void {
    



    for (let i = 0; i < this.employee.length; i++) {
      switch (this.employee[i].currency) {
        case "INIDA":{
          console.log(this.employee[i].currency);
          break;
        }
        case "USA":{
          console.log(this.employee[i].currency);
          break;
        }
        case "CANADA":{
          console.log(this.employee[i].currency);
          break;
        }
        case "DUBAI":{
          console.log(this.employee[i].currency);
          break;
        }
        default:
          console.log("city not in the lits");
          break;
      }
       
    
  }
  
  }}
