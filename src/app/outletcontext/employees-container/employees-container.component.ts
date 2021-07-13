import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-employees-container',
  templateUrl: './employees-container.component.html',
  styleUrls: ['./employees-container.component.scss']
})
export class EmployeesContainerComponent implements OnInit {

  constructor() { }

  // employees object
  employees = [
    {
        id: 1,
        name: 'Darpan',
        designation: 'Developer',
        exp: 4
    },
    {
        id: 2,
        name: 'Meet',
        designation: 'QA',
        exp: 3
    },
    {
        id: 3,
        name: 'Sandeep',
        designation: 'Lead',
        exp: 8
    },
    {
        id: 4,
        name: 'satish',
        designation: 'Manager',
        exp: 10
    },
];

// headings
headings = [
    'Id',
    'Name',
    'Designation',
    'Experience'
];
  
// viewchild refrences for id,name,des,exp 
@ViewChild('id', { static: true }) id: any;
@ViewChild('name', { static: true }) name: any;
@ViewChild('des', { static: true }) des: any;
@ViewChild('exp', { static: true }) exp: any;

cols: TemplateRef<any>[] = [];

ngOnInit(): void {

    this.cols.push(this.id, this.name, this.des, this.exp);
}

}

