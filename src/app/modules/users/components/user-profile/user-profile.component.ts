import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  isEditing: boolean = false;
  editForm!: FormGroup;
  user!: IUser;
  userId!: number;
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.userId = Number(param.get('id'));
    });
    this.userService.getUser(this.userId).subscribe((user) => {
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
  }

  onSubmit() {
    if (this.editForm.valid) {
      this.user = this.editForm.value;
      this.userService.updateUser(this.userId, this.user).subscribe(() => {
        this.isEditing = !this.isEditing;
        this.getUser();
      });
    } else {
      console.log('Invalid');
      return;
    }
  }
}
