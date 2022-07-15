import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoading: boolean = false;
  errorMessage: string = '';
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
      this.isLoading = true;
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          this.auth.setToken(result.access_token);
          this.router.navigate(['wrapper']);
          this.isLoading = false;
        },
        (error) => {
          this.isLoading = false;
          this.errorMessage = error;
          return;
        }
      );
    }
  }
}
