import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ThreadComponent } from './thread/thread.component';
import { BoardComponent } from './board/board.component';

import { ThreadService } from './thread.service';

@NgModule({
  declarations: [
    AppComponent,
    ThreadComponent,
    BoardComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [ThreadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
