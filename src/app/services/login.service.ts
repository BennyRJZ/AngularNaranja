import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Login } from '../interfaces/login';


@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {
  }
  login(email, password): Observable <Login> {
    const obj = {
      email: email,
      password: password
    };
    return this.http.post<Login>('http://api-estrella-roja.appspot.com/adminusers/' + 'login', obj);
    }
}



/**
 * login(username, password) {
    return this.http.post('http://api-estrella-roja.appspot.com/adminusers/login', {
    });

}
 */