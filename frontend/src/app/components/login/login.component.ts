import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: LoginForm;

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    this.loginForm = {
      username: null,
      password: null
    };
  }

  submitLogin(): void {
    this.sessionService.login(this.loginForm);
  }
}

class LoginForm {
  username: String;
  password: String;
}
