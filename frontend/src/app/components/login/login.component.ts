import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../services/session.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: LoginForm;

  constructor(
    private sessionService: SessionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = {
      username: null,
      password: null
    };
  }

  submitLogin(): void {
    this.sessionService.login(this.loginForm)
      .subscribe((response: any) => {
        this.router.navigate(['/board']);
      }, (response: any) => {
        alert(response.error);
      });
  }
}

class LoginForm {
  username: String;
  password: String;
}
