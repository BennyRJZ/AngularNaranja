import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  public array = [];
  public currentUser = [];
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }
  login(email, password){
    this.loginService.login(email, password).subscribe(data => {
    this.transferencia();
  }, error => {alert('Error, verifica tus datos')});
  }
  transferencia(){
    this.router.navigateByUrl('/dashboard');

  }
}




/** HTML
 *


SERVICE.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DashboardComponent } from '../dashboard/dashboard.component';

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

 this.loginService.login('unit.testing@gmail.com', 'Unittesting1').subscribe(
      res => {
      });


 */
