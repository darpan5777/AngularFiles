import { ChangeDetectionStrategy, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/emp-details/employee.model';
import { EmpmdetailListPresenterService } from '../../empmdetail-list-presenter/empmdetail-list-presenter.service';

@Component({
  selector: 'app-empmdetail-list-presentation',
  templateUrl: './empmdetail-list-presentation.component.html',
  styleUrls: ['./empmdetail-list-presentation.component.scss'],
  viewProviders: [EmpmdetailListPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class EmpmdetailListPresentationComponent implements OnInit {
  private _employeeList:Employee[]= []

  @Input() public set empList(value: Employee[]) {
    if (value) {
      debugger
      this._employeeList = value
    }
  }
  public get empList(): Employee[] {
    return this._employeeList
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
