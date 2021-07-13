import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-container',
  templateUrl: './address-container.component.html',
  styleUrls: ['./address-container.component.scss']
})
export class AddressContainerComponent implements OnInit {

  constructor() { }
  
  // employee address object
  addresses = [
    {
        name: 'Darpan',
        country: 'Germany'
    },
    {
        name: 'Meet',
        country: 'Mexico'
    },
    {
        name: 'Sandeep',
        country: 'Canada'
    },
    {
        name: 'Satish',
        country: 'Sweden'
    }
]
  //  headings of employees name and country
headings = [
    'Name',
    'Country'
];

  ngOnInit(): void {
  }

}
