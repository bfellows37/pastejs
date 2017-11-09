import { Component, OnInit, Input } from '@angular/core';
import { Thread } from '../thread';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() reply: Thread;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  indentStyle(indent): SafeStyle {
    return this.domSanitizer.bypassSecurityTrustStyle(`${indent}ex`);
  };
}
