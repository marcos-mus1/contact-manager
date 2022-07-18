import { catchError, Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { IAuth } from '../models';
import jwt_decode from 'jwt-decode';

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

  isLoggedIn(): boolean {
    let token: string = localStorage.getItem('access_token') || '';
    if (token === '') {
      return false;
    } else {
      this.http.get(`${env.BASE_URL}/auth/profile`).subscribe((result)=>{
        if(result){
          
        }
      });
      const decoded: any = jwt_decode(token);
      if (decoded.email !== undefined) {
        return true;
      }
      return false;
    }
  }

  isAdmin(): boolean {
    let token: string = localStorage.getItem('access_token') || '';
    if (token === '') {
      return false;
    } else {
      const decoded: any = jwt_decode(token);
      if (decoded.role === 1) {
        return true;
      }
      return false;
    }
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
