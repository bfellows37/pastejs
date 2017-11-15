import { Component, OnInit } from '@angular/core';
import { Thread } from '../../types/thread';
import { ThreadService } from '../../services/thread.service';
import { ClientStateService } from "../../services/client-state.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  threads: Thread[];

  constructor(
    private _threadService: ThreadService,
    private _clientStateService: ClientStateService
  ) { }

  ngOnInit() {
    this._getThreads();
    this._followCreatedPost();
  }

  private _followCreatedPost(): void {
    this._clientStateService.createdPost$
      .subscribe((newPost: Thread) => {
        if(newPost !== null && newPost.isRoot === true) {
          this.threads.splice(0,0,newPost);
        }
      });
  }

  private _getThreads(): void {
    this._threadService.getThreads()
      .subscribe(threads => {
        this.threads = threads;
      });
  }

}