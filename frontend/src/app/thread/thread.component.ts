import { Component, OnInit, Input } from '@angular/core';
import { Thread } from '../thread';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  @Input() rootPost: Thread;

  constructor() { }

  ngOnInit() {
  }

}
