import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: LoginForm = new LoginForm({username: null,password:null});

  constructor() { }

  ngOnInit() {
  }

  submitLogin(): void {
    console.log(this.loginForm);
  }
}

class LoginForm {
  username: String;
  password: String;

  constructor(form) {
    this.username = form.username || '';
    this.password = form.password || '';
  }
}
