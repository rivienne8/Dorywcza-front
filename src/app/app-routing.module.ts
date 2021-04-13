import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeadComponent} from './head/head.component';
import {UserProfileComponent} from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'user-profile/:id', component: UserProfileComponent },
  { path: 'head', component: HeadComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
