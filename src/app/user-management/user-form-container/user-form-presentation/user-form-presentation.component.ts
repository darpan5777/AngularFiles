import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserFormPresenterService } from '../user-form-presenter/user-form-presenter.service';

@Component({
  selector: 'app-user-form-presentation',
  templateUrl: './user-form-presentation.component.html',
  styleUrls: ['./user-form-presentation.component.scss']
})
export class UserFormPresentationComponent implements OnInit {
  

  
  
  @Output() adduser: EventEmitter<any> = new EventEmitter();
  public userForm: FormGroup;

  constructor(private UserFormPresenterService :UserFormPresenterService ){ 
    this.userForm = this.UserFormPresenterService .BindForm();
  }


  ngOnInit(): void {  this.UserFormPresenterService .userData$.subscribe(
    (adduser) => this.adduser.emit(adduser)
  );
  }
  get userFormControl() {
    return this.userForm.controls;
  }

     public Submit() {
      return this.UserFormPresenterService .userDetails(this.userForm)
     }
  
}
