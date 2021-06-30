
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-empmdetail-list-conteiner',
  templateUrl: './empmdetail-list-conteiner.component.html',
  styleUrls: ['./empmdetail-list-conteiner.component.scss'],
  
})
export class EmpmdetailListConteinerComponent implements OnInit {


  public employeeList$: Observable<any> = of();

  constructor(
    private employeeservice:EmployeeService

  ) {
    this.employeeList$ = this.employeeservice.getAllemployee();
   }

  ngOnInit(): void {
  }

}
