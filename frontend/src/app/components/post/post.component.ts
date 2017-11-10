import { Component, OnInit, Input } from '@angular/core';
import { Thread } from '../../types/thread';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { ClientStateService } from '../../services/client-state.service';
import { UiState } from "../../types/ui-state";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() reply: Thread;
  isSelected: Boolean;
  isReplying: Boolean;

  constructor(
    private domSanitizer: DomSanitizer,
    private clientStateService: ClientStateService
  ) { }

  ngOnInit() {
    this.clientStateService.uiState$
      .subscribe((uiState) =>{
        this.isSelected = (uiState.selectedPost === this.reply._id);
      });
  }

  dynamicIndent(indent): SafeStyle {
    return this.domSanitizer.bypassSecurityTrustStyle(`${indent}ex`);
  };

  selectPost(): void {
    this.clientStateService.setSelectedPost(this.reply._id);
  }

  toggleIsReplying(): void {
    this.isReplying = !this.isReplying;
  }
}
