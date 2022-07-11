import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IContact } from 'src/app/models';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css'],
})
export class EditContactComponent implements OnInit {
  contact!: IContact;
  contactId!: number;
  editForm!: FormGroup;
  constructor(
    private contactService: ContactService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.contactId = Number(param.get('id'));
    });
    this.contactService.getContact(this.contactId).subscribe((contact) => {
      this.contact = contact;
      this.editForm = new FormGroup(
        {
          firstName: this.fb.control(contact.firstName, Validators.required),
          lastName: this.fb.control(contact.lastName, Validators.required),
          telephone: this.fb.control(contact.telephone, Validators.required),
          email: this.fb.control(contact.email, Validators.required),
          entreprise: this.fb.control(contact.entreprise, Validators.required),
          address: this.fb.control(contact.address, Validators.required),
          position: this.fb.control(contact.position, Validators.required),
        },
        { updateOn: 'submit' }
      );
    });
  }

  onSubmit() {
    if (this.editForm.valid) {
      this.contactService.updateContat(this.contactId, this.editForm.value);
    } else {
      console.log('Invalid');
      return;
    }
  }
}
