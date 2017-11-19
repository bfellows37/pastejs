import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {ThreadUser} from "../types/thread";

@Injectable()
export class SessionService {

  _token: string;
  me: ThreadUser;

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) { }

  login(loginRequest: LoginRequest): void {
    this.http.post('/api/session/createToken', loginRequest)
      .subscribe((response: LoginSuccessResponse) => {
        this._token = response.token;
        this.cookieService.set('token', response.token);
        this.router.navigate(['/board']);
      }, (response: any) => {
        alert(response.error);
      });
  }

  getToken(): string {
    return this._token;
  }

  getUserInfo(): void {
    let headers =  new HttpHeaders().set('x-access-token', this.cookieService.get('token'));
    this.http.get('/api/session/me',{headers:headers})
      .subscribe((response: ThreadUser) => {
        this.me = response;
      });
  }
}

export class LoginRequest {
  username: string;
  password: string;
}

export class LoginSuccessResponse {
  op: string;
  token: string;
}

export class VerifyTokenResponse {
  valid: Boolean;
}

class VerifyTokenRequest {
  token: string;
}
