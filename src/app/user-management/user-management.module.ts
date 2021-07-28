import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import { UserFormContainerComponent } from './user-form-container/user-form-container.component';
import { UserFormPresentationComponent } from './user-form-container/user-form-presentation/user-form-presentation.component';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';
import { UserListPresentationComponent } from './user-list-container/user-list-presentation/user-list-presentation.component';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReactiveformModule } from '../reactiveform/reactiveform.module';


@NgModule({
  declarations: [
    UserManagementComponent,
    UserFormContainerComponent,
    UserFormPresentationComponent,
    UserListContainerComponent,
    UserListPresentationComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    NgxPaginationModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveformModule
    
  ]
  ,
  providers:[UserService]
})
export class UserManagementModule { }
