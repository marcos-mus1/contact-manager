import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { IUser } from 'src/app/models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  isEditing: boolean = false;
  changePassword: boolean = false;
  editForm!: FormGroup;
  passwordForm!: FormGroup;
  token: string = localStorage.getItem('access_token') || '';
  decoded: any = jwt_decode(this.token);
  user!: IUser;
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUser();
    this.passwordForm = new FormGroup(
      {
        currentPassword: this.fb.control('', Validators.required),
        newPassword: this.fb.control('', Validators.required),
        confirmPassword: this.fb.control('', Validators.required),
      },
      { updateOn: 'submit' }
    );
  }

  getUser() {
    this.userService.getUser(this.decoded.sub).subscribe((user) => {
      this.user = user;
      this.editForm = new FormGroup(
        {
          firstName: this.fb.control(user.firstName, Validators.required),
          lastName: this.fb.control(user.lastName, Validators.required),
          email: this.fb.control(user.email, Validators.required),
          profile: this.fb.control(user.profile, Validators.required),
        },
        { updateOn: 'submit' }
      );
    });
  }

  deleteUser(id: number) {
    return this.userService.deleteUser(id).subscribe(() => {
      this.router.navigate(['users']);
    });
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
    this.changePassword = false;
  }
  toggleEditPassword() {
    this.changePassword = !this.changePassword;
  }

  onSubmit() {
    if (this.editForm.valid) {
      if (!this.changePassword) {
        this.user = this.editForm.value;
        this.userService
          .updateUser(this.decoded.sub, this.user)
          .subscribe(() => {
            this.isEditing = !this.isEditing;
            this.getUser();
          });
      } else {
        // TODO: change password
      }
    } else {
      console.log('Invalid');
      return;
    }
  }
}
