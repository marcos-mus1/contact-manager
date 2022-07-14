import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    ContactsComponent,
    AddContactComponent,
    EditContactComponent,
    ContactsListComponent,
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    DataTablesModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class ContactsModule {}
