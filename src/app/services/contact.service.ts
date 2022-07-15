import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { IContact } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  createContact(contact: IContact): Observable<IContact> {
    return this.http
      .post<IContact>(`${env.BASE_URL}/contacts`, contact)
      .pipe(catchError(this.hangleError));
  }

  getContacts(): Observable<IContact[]> {
    return this.http
      .get<IContact[]>(`${env.BASE_URL}/users/user-contacts`)
      .pipe(catchError(this.hangleError));
  }

  getContact(id: number): Observable<IContact> {
    return this.http
      .get<IContact>(`${env.BASE_URL}/contacts/${id}`)
      .pipe(catchError(this.hangleError));
  }

  updateContat(id: number, contact: IContact): Observable<IContact> {
    return this.http
      .patch<IContact>(`${env.BASE_URL}/contacts/${id}`, contact)
      .pipe(catchError(this.hangleError));
  }

  deleteContact(id: number): Observable<{}> {
    return this.http
      .delete<{}>(`${env.BASE_URL}/contacts/${id}`)
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
