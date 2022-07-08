import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NewContactComponent } from './components/new-contact/new-contact.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { NewUserComponent } from './components/new-user/new-user.component';

import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    ContactsComponent,
    UsersComponent,
    LoginComponent,
    SettingsComponent,
    NewContactComponent,
    ContactDetailsComponent,
    EditContactComponent,
    NewUserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, DataTablesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
