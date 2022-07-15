import { catchError, Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { IAuth } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) {}

  setToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['login']);
  }

  login(user: IAuth): Observable<any> {
    return this.http
      .post<any>(`${env.BASE_URL}/auth/login`, user)
      .pipe(catchError(this.hangleError));
  }

  hangleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error : ${error.error.message}`;
      console.log(error);
    } else {
      errorMessage = `Error: ${error.error.message}`;
    }

    return throwError(errorMessage);
  }
}
