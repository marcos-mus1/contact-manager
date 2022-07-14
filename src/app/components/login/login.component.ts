import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        email: this.fb.control('', Validators.required),
        password: this.fb.control('', Validators.required),
      },
      { updateOn: 'blur' }
    );
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['wrapper']);
    }
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          this.router.navigate(['wrapper']);
        },
        (err: Error) => {
          return;
        }
      );
    }
  }
}
