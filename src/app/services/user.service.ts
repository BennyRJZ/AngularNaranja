import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/User';
import { Observable } from 'rxjs/observable';

@Injectable()
export class UserService {
  private _id: number;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://api-estrella-roja.appspot.com' + '/users');
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>('https://api-estrella-roja.appspot.com' + '/users' + '/' + id);
  }

}
