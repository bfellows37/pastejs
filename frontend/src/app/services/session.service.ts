import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class SessionService {

  constructor(private http: HttpClient) { }

  login(loginRequest: LoginRequest): Observable<any>{
    return this.http.post('http://localhost:3000/api/session/login', loginRequest);
  }
}

class LoginRequest {
  username: String;
  password: String;
}

class LoginSuccessResponse {
  op: String;
}
