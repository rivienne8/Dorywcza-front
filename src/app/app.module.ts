import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { MainButtonsComponent } from './main-page/main-buttons/main-buttons.component';
import { ListOfferComponent } from './main-page/list-offer/list-offer.component';
import { OffersButtonsComponent } from './offers-page/offers-buttons/offers-buttons.component';
import { ListDetailOfferComponent } from './offers-page/list-detail-offer/list-detail-offer.component';
import { DetailedOfferComponent } from './offers-page/detailed-offer/detailed-offer.component';
import { OfferViewButtonsComponent } from './view-offer-page/offer-view-buttons/offer-view-buttons.component';
import { ViewOfferComponent } from './view-offer-page/view-offer/view-offer.component';
import { UserUpdateProfileComponent } from './user-update-profile/user-update-profile.component';
import {HttpClientModule} from '@angular/common/http';
import { UserPublicProfileComponent } from './user-public-profile/user-public-profile.component';
import { FooterComponent } from './footer/footer.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {BriefOfferComponent} from './main-page/brief-offer/brief-offer.component';
import {MainPageComponent} from './main-page/main-page.component';
import {MatMenuModule} from '@angular/material/menu';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    MainButtonsComponent,
    ListOfferComponent,
    OffersButtonsComponent,
    ListDetailOfferComponent,
    DetailedOfferComponent,
    OfferViewButtonsComponent,
    ViewOfferComponent,
    UserUpdateProfileComponent,
    UserPublicProfileComponent,
    FooterComponent,
    MainPageComponent,
    BriefOfferComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatMenuModule, MatButtonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
