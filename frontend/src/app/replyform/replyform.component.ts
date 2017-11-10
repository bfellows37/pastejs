import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-replyform',
  templateUrl: './replyform.component.html',
  styleUrls: ['./replyform.component.css']
})
export class ReplyformComponent implements OnInit {

  @Input() replyTo: String;
  post: String;

  constructor() { }

  ngOnInit() {
  }

  submitReply(): void {
    console.log(this.post);
  }

}
