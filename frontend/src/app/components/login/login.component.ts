import { Component, OnInit } from '@angular/core';
import {SessionService, LoginRequest, LoginSuccessResponse} from '../../services/session.service';
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: LoginRequest;

  constructor(
    private sessionService: SessionService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
    if(this.cookieService.get('token')) {
      this.router.navigate(['/board']);
    }
    this.loginForm = {
      username: null,
      password: null
    };
  }

  submitLogin(): void {
    this.sessionService.login(this.loginForm);
  }
}
