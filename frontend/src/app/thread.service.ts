import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

import { Thread } from './thread';
import { THREADS } from './mock-data/threads.mock';

@Injectable()
export class ThreadService {

  constructor(
    private http: HttpClient,
    // private messageService: MessageService
  ) { }

  getThreads(): Observable<Thread[]> {
    // return of(THREADS);
    return this.http.get('http://localhost:3000/api/posts');
  }

}
