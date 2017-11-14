import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs/Rx';

import { PostRequest } from '../types/post-request';
import { Thread } from '../types/thread';
import { ClientStateService } from "./client-state.service";

@Injectable()
export class ThreadService {

  constructor(
    private http: HttpClient,
    private clientStateService: ClientStateService
  ) { }

  getThreads(): Observable<Thread[]> {
    return this.http.get('http://localhost:3000/api/posts');
  }

  getReplies(threadId: String): Observable<Thread[]> {
    return this.http.get(`http://localhost:3000/api/posts/replies/${threadId}`);
  }

  postReply(postRequest: PostRequest): void {
    this.http.post('http://localhost:3000/api/posts',postRequest)
      .subscribe((response: Thread) => {
        console.log(response);
        this.clientStateService.updateThreadWithPost(response);
      });
  }
}
