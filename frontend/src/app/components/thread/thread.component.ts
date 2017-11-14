import { Component, OnInit, Input } from '@angular/core';
import { Thread } from '../../types/thread';
import { ThreadService } from '../../services/thread.service';
import { ClientStateService } from "../../services/client-state.service";
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  @Input() rootPost: Thread;
  replies: Thread[];

  constructor(
    private threadService: ThreadService,
    private clientStateService: ClientStateService
  ) { }

  ngOnInit() {
    this.getReplies();
    this._followCreatedPost();
  }

  private _followCreatedPost(): void {
    this.clientStateService.createdPost$
      .subscribe((newPost: Thread) => {
        if(newPost !== null
          && newPost.replyTo === this.rootPost._id
          && newPost.isRoot === false) {
          this.insertNewPostInTree(newPost);
        }
      });
  }

  private insertNewPostInTree(newPost: Thread) {

    newPost.indent = (newPost.path.match(/\./g) || []).length;
    const insertAfter = this.findIndexOfParentPost(newPost.parent);

    if(insertAfter === null) /* reply to root */ {
      this.replies.push(newPost);
    } else /* reply to reply */ {
      this.replies.splice(insertAfter,0,newPost);
    }
  }

  private findIndexOfParentPost(parentPostId: String): number {
    for(let i = 0; i < this.replies.length; ++i) {
      if(this.replies[i]._id === parentPostId) {
        return i+1;
      }
    }
    return null;
  }

  getReplies(): void {
    this.threadService.getReplies(this.rootPost._id)
      .subscribe(replies => {

        this.replies = replies.map(reply => {
          return Object.assign(reply,{
            indent: (reply.path.match(/\./g) || []).length
          });
        });

      });
  }
}
