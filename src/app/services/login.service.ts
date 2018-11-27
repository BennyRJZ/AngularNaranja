import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Login } from '../interfaces/login';


@Injectable()
export class LoginService {

  private_id: number;
  constructor(private http: HttpClient) {
  }

  login(email, password): Observable <Login> {
    const obj = {
      email: email,
      password: password
    };
    return this.http.post<Login>('http://api-estrella-roja.appspot.com/users' + '/login', obj);
}
}