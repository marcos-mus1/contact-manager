import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IContact } from 'src/app/models';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
})
export class ContactsListComponent implements OnInit {
  isLoading: boolean = false;
  contacts: IContact[] = [];
  errorMessage: string = '';

  dtOptions: DataTables.Settings = {};

  constructor(private router: Router, private contactService: ContactService) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
    };

    this.getContacts();
  }

  getContacts() {
    this.isLoading = true;
    return this.contactService.getContacts().subscribe(
      (contacts: IContact[]) => {
        this.contacts = contacts;
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = error;
        this.isLoading = false;
      }
    );
  }

  deleteContact(id: number) {
    return this.contactService.deleteContact(id).subscribe(() => {
      this.getContacts();
    });
  }

  navigateToContactEdit(id: number): void {
    this.router.navigate([`wrapper/contacts/edit/` + id]);
  }
}
