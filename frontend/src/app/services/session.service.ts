import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class SessionService {

  _token: string;

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) { }

  login(loginRequest: LoginRequest): void {
    this.http.post('http://localhost:3000/api/session/createToken', loginRequest)
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

  verifyToken(): Observable<VerifyTokenResponse> {
    const tokenRequestBody: VerifyTokenRequest = {token: this.cookieService.get('token')};
    return this.http.post('http://localhost:3000/api/session/me',tokenRequestBody);
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
