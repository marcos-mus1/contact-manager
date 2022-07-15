import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models';
import { UserService } from 'src/app/services/user.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  isLoading: boolean = false;
  users: IUser[] = [];
  errorMessage: string = '';
  token: string = localStorage.getItem('access_token') || '';
  decoded: any = jwt_decode(this.token);

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.isLoading = true;
    return this.userService.getUsers().subscribe(
      (users: IUser[]) => {
        this.users = users.filter((user) => user.id !== this.decoded.sub);
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = error;
        this.isLoading = false;
      }
    );
  }

  deleteUser(id: number) {
    return this.userService.deleteUser(id).subscribe(() => {
      this.getUsers();
    });
  }

  navigateToUserDetails(id: number): void {
    this.router.navigate([`wrapper/users/profile/` + id], {
      skipLocationChange: true,
    });
  }
}
