import { Component, OnInit } from '@angular/core';
import { Thread } from '../thread';
import { THREADS } from '../mock-data/threads.mock';
import { ThreadService } from '../thread.service';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  threads: Thread[];

  constructor(private threadService: ThreadService) { }

  ngOnInit() {
    this.getThreads();
  }

  getThreads(): void {
    this.threadService.getThreads()
      .subscribe(threads => this.threads = threads);
  }

}
