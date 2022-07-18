import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from 'src/app/interceptors/token.interceptor';
import { MatTableModule } from '@angular/material/table';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
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
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    Ng2SearchPipeModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
})
export class ContactsModule {}
