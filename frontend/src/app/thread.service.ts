import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';


import { Thread } from './thread';

@Injectable()
export class ThreadService {

  constructor(
    private http: HttpClient
  ) { }

  getThreads(): Observable<Thread[]> {
    return this.http.get('http://localhost:3000/api/posts');
  }

  getReplies(threadId: String): Observable<Thread[]> {
    return this.http.get(`http://localhost:3000/api/posts/replies/${threadId}`);
  }
}
