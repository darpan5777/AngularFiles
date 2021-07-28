import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { SortController } from 'ag-grid';
import { User } from '../../user.model';

@Component({
  selector: 'app-user-list-presentation',
  templateUrl: './user-list-presentation.component.html',
  styleUrls: ['./user-list-presentation.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class UserListPresentationComponent implements OnInit {
   component:any
  private _users: User[] = [];
  page:number =1;

  firstName: any;

  @Input() public set user(value: User[]) {
    if(value) {
      this._users = value
    }
  }

  public get user(): User[] {
    return this._users
  }
    


  constructor() { }

  ngOnInit(): void {
  }

search(){
  if (this.firstName == "" ){
    this.ngOnInit();
}else
{
  this.user = this.user.filter(res=>{
    return res.FirstName.toLocaleLowerCase().match(this.firstName.toLocaleLowercase)
  }
    )
}

}
key :string= "firstName";
reserve:boolean =false;
sort(key: string){
  this.key =key;
  this.reserve = !this.reserve;
}
}
