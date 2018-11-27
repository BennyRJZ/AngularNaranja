import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  public currentUser = [];

  constructor(private loginService: LoginService) { }

  ngOnInit() {

    this.loginService.login('unit.testing@gmail.com', 'Unittesting1').subscribe(
      res => {
        console.log(res);
    });

  }
  login(email, password){
    this.loginService.login(email, password).subscribe(data => {
      console.log();
    });
  }
}




/** HTML
 *


SERVICE.
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

 */
