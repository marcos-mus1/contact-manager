import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { IUser } from 'src/app/models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  registrationForm!: FormGroup;
  user: IUser = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    profile: '',
  };
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registrationForm = new FormGroup(
      {
        firstName: this.fb.control('', Validators.required),
        lastName: this.fb.control('', Validators.required),
        email: this.fb.control('', Validators.required),
        password: this.fb.control('123456', Validators.required),
        profile: this.fb.control('', Validators.required),
      },
      { updateOn: 'blur' }
    );

    const draft = localStorage.getItem('REGISTER_USER');

    if (draft) {
      this.registrationForm.setValue(JSON.parse(draft));
    }

    this.registrationForm.valueChanges
      .pipe(filter(() => this.registrationForm.valid))
      .subscribe((val) =>
        localStorage.setItem('REGISTER_USER', JSON.stringify(val))
      );
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.user = this.registrationForm.value;
      return this.userService.createUser(this.user).subscribe(() => {
        localStorage.removeItem('REGISTER_USER');
        this.router.navigate(['wrapper/users']);
      });
    } else {
      console.log('Invalid');
      return;
    }
  }

  resetForm() {
    localStorage.removeItem('REGISTER_USER');
    return this.registrationForm.reset();
  }
}
