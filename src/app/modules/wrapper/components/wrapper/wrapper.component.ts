import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css'],
  providers: [UserService],
})
export class WrapperComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
