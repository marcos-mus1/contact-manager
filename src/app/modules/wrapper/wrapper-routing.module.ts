import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/guards/admin.guard';
import { AccountComponent } from './components/account/account.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'contacts',
        loadChildren: () =>
          import('../contacts/contacts.module').then((m) => m.ContactsModule),
      },
      {
        path: 'users',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('../users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'account',
        component: AccountComponent,
      },
      {
        path: '',
        redirectTo: 'contacts',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WrapperRoutingModule {}
