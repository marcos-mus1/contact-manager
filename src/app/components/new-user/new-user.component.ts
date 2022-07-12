import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  registrationForm!: FormGroup;
  user: IUser = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    profile: '',
  };
  constructor(private userService: UserService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = new FormGroup(
      {
        firstName: this.fb.control('', Validators.required),
        lastName: this.fb.control('', Validators.required),
        email: this.fb.control('', Validators.required),
        password: this.fb.control('123456', Validators.required),
        profile: this.fb.control('', Validators.required),
      },
      { updateOn: 'submit' }
    );
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.user = this.registrationForm.value;
      return this.userService.createUser(this.user).subscribe();
    } else {
      console.log('Invalid');
      return;
    }
  }
}
