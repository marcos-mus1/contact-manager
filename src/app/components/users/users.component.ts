import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IContact } from 'src/app/models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: IContact[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  display() {
    console.log('Click');
  }
}
