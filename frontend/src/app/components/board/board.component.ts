import { Component, OnInit } from '@angular/core';
import { Thread } from '../../types/thread';
import { ThreadService } from '../../services/thread.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

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
