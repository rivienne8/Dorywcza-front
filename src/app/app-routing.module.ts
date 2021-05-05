import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeadComponent} from './head/head.component';
import {MainPageComponent} from './main-page/main-page.component';
import {UserUpdateProfileComponent} from './user-update-profile/user-update-profile.component';
import {UserPublicProfileComponent} from './user-public-profile/user-public-profile.component';
import {OffersPageComponent} from './offers-page/offers-page.component';
import {ViewOfferPageComponent} from './view-offer-page/view-offer-page.component';
import {UserOffersComponent} from './user-offers/user-offers.component';
import {UserAccessibleProfileComponent} from './user-accessible-profile/user-accessible-profile.component';
import {AddOfferComponent} from './add-offer/add-offer.component';
import {AddOfferFirstPageComponent} from './add-offer/add-offer-first-page/add-offer-first-page.component';
import {AddOfferSecondPageComponent} from './add-offer/add-offer-second-page/add-offer-second-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/main-page', pathMatch: 'full'},
  { path: 'main-page', component: MainPageComponent},
  { path: 'user-update-profile/:id', component: UserUpdateProfileComponent },
  { path: 'user-public-profile/:id', component: UserPublicProfileComponent },
  { path: 'user-offers/:userId', component: UserOffersComponent},
  { path: 'user-accessible-profile/:id', component: UserAccessibleProfileComponent},
  { path: 'head', component: HeadComponent },
  { path: 'service-offers', component: OffersPageComponent},
  { path: 'jobs', component: OffersPageComponent},
  { path: 'service-offers/:id', component: ViewOfferPageComponent},
  { path: 'jobs/:id', component: ViewOfferPageComponent},
  { path: 'add-service-offer', component: AddOfferComponent,
    children: [
      { path: 'first', component: AddOfferFirstPageComponent},
      { path: 'second', component: AddOfferSecondPageComponent}
    ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
