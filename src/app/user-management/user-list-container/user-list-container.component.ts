import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list-container',
  templateUrl: './user-list-container.component.html',
  styleUrls: ['./user-list-container.component.scss']
})
export class UserListContainerComponent implements OnInit {

  public userList$: Observable<any> = of();

  constructor( userservice:UserService) {
    this.userList$  = userservice.UserList()
   }

  ngOnInit(): void {
  }
  public onDeleteId(id: number) {
    return this.userservice.deleteuser(id)
   }
 }

