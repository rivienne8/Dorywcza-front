import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeadComponent} from './head/head.component';
import {MainPageComponent} from './main-page/main-page.component';
import {UserUpdateProfileComponent} from './user-update-profile/user-update-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/main-page', pathMatch: 'full'},
  { path: 'main-page', component: MainPageComponent},
  { path: 'user-update-profile/:id', component: UserUpdateProfileComponent },
  { path: 'head', component: HeadComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
