import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsComponent,
    children: [
      {
        path: 'list',
        component: ContactsListComponent,
      },
      {
        path: 'new-contact',
        component: AddContactComponent,
      },
      {
        path: 'edit/:id',
        component: EditContactComponent,
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
export class ContactsRoutingModule {}
