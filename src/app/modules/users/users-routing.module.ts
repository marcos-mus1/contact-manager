import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'list',
        component: UsersListComponent,
      },
      {
        path: 'new-user',
        component: AddUserComponent,
      },
      {
        path: 'profile/:id',
        component: UserProfileComponent,
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
