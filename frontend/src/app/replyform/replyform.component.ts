import { Component, OnInit, Input } from '@angular/core';
import { ThreadService } from "../services/thread.service";

@Component({
  selector: 'app-replyform',
  templateUrl: './replyform.component.html',
  styleUrls: ['./replyform.component.css']
})
export class ReplyformComponent implements OnInit {

  @Input() replyTo: String;
  post: String;

  constructor(private threadService: ThreadService,) { }

  ngOnInit() {
    this.post = this.replyTo;
  }

  submitReply(): void {

    this.threadService.postReply({
      post: {
        content: this.post
      },
      replyTo: this.replyTo
    });
  }

}
