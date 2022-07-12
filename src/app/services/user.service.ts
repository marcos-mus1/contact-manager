import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { IUser } from '../models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  createUser(contact: IUser): Observable<IUser> {
    return this.http
      .post<IUser>(`${env.BASE_URL}/users`, contact)
      .pipe(catchError(this.hangleError));
  }

  getUsers(): Observable<IUser[]> {
    return this.http
      .get<IUser[]>(`${env.BASE_URL}/users`)
      .pipe(catchError(this.hangleError));
  }

  getUser(id: number): Observable<IUser> {
    return this.http
      .get<IUser>(`${env.BASE_URL}/users/${id}`)
      .pipe(catchError(this.hangleError));
  }

  updateUser(id: number, user: IUser): Observable<IUser> {
    return this.http
      .patch<IUser>(`${env.BASE_URL}/users/${id}`, user)
      .pipe(catchError(this.hangleError));
  }

  deleteUser(id: number): Observable<{}> {
    return this.http
      .delete<{}>(`${env.BASE_URL}/users/${id}`)
      .pipe(catchError(this.hangleError));
  }

  hangleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error : ${error.error.message}`;
      console.log(error);
    } else {
      errorMessage = `Error Server, Status ${error.status}`;
    }

    return throwError(errorMessage);
  }
}
