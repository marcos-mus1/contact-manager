import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IContact } from 'src/app/models';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css'],
})
export class NewContactComponent implements OnInit {
  registrationForm!: FormGroup;
  contact: IContact = {
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    position: '',
    entreprise: '',
    address: '',
  };

  constructor(
    private contactService: ContactService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registrationForm = new FormGroup(
      {
        firstName: this.fb.control('', Validators.required),
        lastName: this.fb.control('', Validators.required),
        telephone: this.fb.control('', Validators.required),
        email: this.fb.control('', Validators.required),
        entreprise: this.fb.control('', Validators.required),
        address: this.fb.control('', Validators.required),
        position: this.fb.control('', Validators.required),
      },
      { updateOn: 'submit' }
    );
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.contact = this.registrationForm.value;
      console.log(this.contact);
      return this.contactService.createContact(this.registrationForm.value);
    } else {
      console.log('Invalid');
      return;
    }
  }
}
