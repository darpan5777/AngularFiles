import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AddFormListPresenterService } from 'src/app/emp-details/AddForm-list-presenter/add-form-list-presenter.service';


@Component({
  selector: 'app-add-form-list-presentation',
  templateUrl: './add-form-list-presentation.component.html',
  styleUrls: ['./add-form-list-presentation.component.scss'],
  viewProviders: [AddFormListPresenterService]

})
export class AddFormListPresentationComponent implements OnInit {




  public AccountForm: FormGroup;

  @Output() addaccount: EventEmitter<any> = new EventEmitter();




  constructor(private addFormListPresenterService: AddFormListPresenterService) {
    this.AccountForm = this.addFormListPresenterService.BindForm();
  }

  
  ngOnInit(): void {
  
  
    
      this.addFormListPresenterService.accountData$.subscribe(
        (addaccount) => this.addaccount.emit(addaccount)
      );
  }

  get AccountFormControl() {
    return this.AccountForm.controls;
  }

  public onSubmit() {
    this.addFormListPresenterService.accountDetails(this.AccountForm)
  }

}
