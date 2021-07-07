import { ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
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
  private _accountdetails:Employee[]= []
  

  @Input() public set accountdetails(value: Employee[]) {
    if (value) {
      debugger
      this._accountdetails = value
    }
  }
  public get accountdetails(): Employee[] {
    return this._accountdetails
  }

  
  @Output() public deleteId:EventEmitter<any> = new EventEmitter();
  constructor(
   private empdetillistpresenterservice:EmpmdetailListPresenterService
  ) { }

  ngOnInit(): void {
    this.empdetillistpresenterservice.accountId$.subscribe((accountId) => {
      debugger
      this.deleteId.emit(accountId);
    });
  }
  public deleteaccount(Id: number) {
    debugger
    this.empdetillistpresenterservice.deleteaccount(Id)
  }
}
