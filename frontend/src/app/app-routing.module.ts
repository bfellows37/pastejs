import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BoardComponent} from './components/board/board.component';
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'board', component: BoardComponent },
  { path: '', component: BoardComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
