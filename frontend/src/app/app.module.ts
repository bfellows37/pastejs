
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ClientStateService } from "./services/client-state.service";
import { ThreadService } from './services/thread.service';
import {SessionService} from "./services/session.service";

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BoardComponent } from './components/board/board.component';

import { ThreadComponent } from './components/thread/thread.component';
import { PostComponent } from './components/post/post.component';
import { ReplyformComponent } from './components/replyform/replyform.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  providers: [
    ClientStateService,
    ThreadService,
    SessionService
  ],
  declarations: [
    AppComponent,
    BoardComponent,
    ThreadComponent,
    PostComponent,
    ReplyformComponent,
    LoginComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
