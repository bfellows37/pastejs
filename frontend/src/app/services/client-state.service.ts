import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { UiState, initialUiState } from '../types/ui-state';
import { Thread } from '../types/thread';

@Injectable()
export class ClientStateService {

  private _uiState: BehaviorSubject<UiState> = new BehaviorSubject(initialUiState);
  uiState$ = this._uiState.asObservable();

  private _createdPost: BehaviorSubject<Thread> = new BehaviorSubject(null);
  createdPost$ = this._createdPost.asObservable();

  constructor() {  }

  setSelectedPost(postId: String): void {
    this._uiState.next({selectedPost: postId});
  }

  updateThreadWithPost(post: Thread): void {
    this._createdPost.next(post);
    this.setSelectedPost(post._id);
  }

}
