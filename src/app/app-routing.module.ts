import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { LoginComponent } from './components/login/login.component';
import { NewContactComponent } from './components/new-contact/new-contact.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path: 'contacts',
    component: ContactsComponent,
  },

  {
    path: 'contacts/details/:id',
    component: ContactDetailsComponent,
  },
  {
    path: 'contacts/edit/:id',
    component: EditContactComponent,
  },
  {
    path: 'contacts/new-contact',
    component: NewContactComponent,
  },

  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'users/new-user',
    component: NewUserComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
