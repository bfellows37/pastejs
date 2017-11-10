import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { UiState, initialUiState } from '../types/ui-state';

@Injectable()
export class ClientStateService {

  private _uiState: BehaviorSubject<UiState> = new BehaviorSubject(initialUiState);
  uiState$ = this._uiState.asObservable();

  constructor() {  }

  setSelectedPost(postId: String): void {
    this._uiState.next({selectedPost: postId});
  }

}
