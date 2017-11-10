
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ClientStateService } from "./services/client-state.service";
import { ThreadService } from './services/thread.service';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BoardComponent } from './components/board/board.component';

import { ThreadComponent } from './components/thread/thread.component';
import { PostComponent } from './components/post/post.component';


@NgModule({
  providers: [ClientStateService,ThreadService],
  declarations: [
    AppComponent,
    BoardComponent,
    ThreadComponent,
    PostComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
