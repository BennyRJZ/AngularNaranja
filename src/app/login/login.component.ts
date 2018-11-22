import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {

    this.loginService.login('diego.castagne@gmail.com', 'dca123').subscribe(
      res => {
        console.log(res);
    });

  }
  login(email: string, password: string){
    event.preventDefault(); // Avoid default action for the submit button of the login form
    this.loginService.login(email, password).subscribe(
      res => {
        console.log(res);

       },
       error => {
         console.error(error);
       }
     );

  }




}
