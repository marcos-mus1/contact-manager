import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    UserProfileComponent,
    UsersListComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class UsersModule {}
