import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  isLoading: boolean = false;
  users: IUser[] = [];
  errorMessage: string = '';

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.isLoading = true;
    return this.userService.getUsers().subscribe(
      (users: IUser[]) => {
        this.users = users;
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = error;
        this.isLoading = false;
      }
    );
  }

  display() {
    console.log('Click');
  }
}
