import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import jwt_decode from 'jwt-decode';
import { IUser } from 'src/app/models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  token: string = localStorage.getItem('access_token') || '';
  decoded: any = jwt_decode(this.token);
  user!: IUser;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser(this.decoded.sub).subscribe((user) => {
      console.log(user);
      this.user = user;
    });
  }
}
