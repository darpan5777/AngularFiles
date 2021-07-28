import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form-container',
  templateUrl: './user-form-container.component.html',
  styleUrls: ['./user-form-container.component.scss']
})
export class UserFormContainerComponent implements OnInit {

  constructor(private userservice:UserService) { }

  ngOnInit(): void {
  }
  public onadduser(userForm: FormGroup) {
 this.userservice.newAccount(userForm);
  }
}
