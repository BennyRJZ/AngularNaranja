import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    return this.http.post('http://api-estrella-roja.appspot.com/users/login', {
      email: email,
      password: password,
    });
  }
}
