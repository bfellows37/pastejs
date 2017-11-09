import { Component, OnInit, Input } from '@angular/core';
import { Thread } from '../thread';
import { ThreadService } from '../thread.service';
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
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getReplies();
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
