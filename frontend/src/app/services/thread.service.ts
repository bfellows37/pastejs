import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs/Rx';

import { PostRequest } from '../types/post-request';
import { Thread } from '../types/thread';
import { ClientStateService } from "./client-state.service";
import {SessionService} from "./session.service";
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class ThreadService {

  constructor(
    private http: HttpClient,
    private clientStateService: ClientStateService,
    private sessionService: SessionService,
    private cookieService: CookieService
  ) { }

  getThreads(): Observable<Thread[]> {
    let token = this.sessionService.getToken();
    let headers =  new HttpHeaders().set('x-access-token', this.cookieService.get('token'));
    return this.http.get('/api/posts',{headers:headers});
  }

  getReplies(threadId: String): Observable<Thread[]> {
    let token = this.sessionService.getToken();
    let headers =  new HttpHeaders().set('x-access-token', this.cookieService.get('token'));
    return this.http.get(
      `/api/posts/replies/${threadId}`,
      {headers: headers});
  }

  postReply(postRequest: PostRequest): void {
    let token = this.sessionService.getToken();
    let headers =  new HttpHeaders().set('x-access-token', this.cookieService.get('token'));
    this.http.post('/api/posts',postRequest, {headers:headers})
      .subscribe((response: Thread) => {
        console.log(response);
        this.clientStateService.updateThreadWithPost(response);
      });
  }
}
