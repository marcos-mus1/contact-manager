import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { IContact } from 'src/app/models';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
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
    private fb: FormBuilder,
    private router: Router
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
      { updateOn: 'blur' }
    );

    const draft = localStorage.getItem('REGISTER_CONTACT');

    if (draft) {
      this.registrationForm.setValue(JSON.parse(draft));
    }

    this.registrationForm.valueChanges
      .pipe(filter(() => this.registrationForm.valid))
      .subscribe((val) =>
        localStorage.setItem('REGISTER_CONTACT', JSON.stringify(val))
      );
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.contact = this.registrationForm.value;
      return this.contactService.createContact(this.contact).subscribe(() => {
        localStorage.removeItem('REGISTER_CONTACT');
        this.router.navigate(['wrapper/contacts']);
      });
    } else {
      console.log('Invalid');
      return;
    }
  }

  resetForm() {
    localStorage.removeItem('REGISTER_CONTACT');
    return this.registrationForm.reset();
  }
}
