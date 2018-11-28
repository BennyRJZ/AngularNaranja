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
  });
  }
  transferencia(){
    this.router.navigateByUrl('/dashboard');

  }
}

// , error => {alert('Error, verifica tus datos')}