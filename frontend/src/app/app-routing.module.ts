import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThreadComponent } from './thread/thread.component';
import { BoardComponent } from './board/board.component';

const routes: Routes = [
  { path: '', component: BoardComponent },
  { path: 'thread', component: ThreadComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
