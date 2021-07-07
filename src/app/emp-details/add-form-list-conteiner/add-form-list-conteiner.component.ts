import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-form-list-conteiner',
  templateUrl: './add-form-list-conteiner.component.html',
  styleUrls: ['./add-form-list-conteiner.component.scss']
})
export class AddFormListConteinerComponent implements OnInit {



  constructor(  private employeeservice:EmployeeService) { }

  ngOnInit(): void {
    
  }
  public onaddaccount(AccountForm: FormGroup) {
    debugger
    console.log();
    this.employeeservice.addaccount(AccountForm);
  }
}
