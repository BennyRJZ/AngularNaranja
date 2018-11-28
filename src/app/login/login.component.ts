import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import {Router} from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';



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
    },
    (err: HttpErrorResponse) => {
      if (err.status === 200) {
        this.transferencia();
      }
    }
    );
    }
  transferencia() {
    this.router.navigateByUrl('/dashboard');
  }
}
