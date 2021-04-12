import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { MainButtonsComponent } from './main-page/main-buttons/main-buttons.component';
// import { ListOffertComponent } from './main-page/list-offer/list-offer.component';
import { OffersButtonsComponent } from './offers-page/offers-buttons/offers-buttons.component';
import { ListDetailOfferComponent } from './offers-page/list-detail-offer/list-detail-offer.component';
import { DetailedOfferComponent } from './offers-page/detailed-offer/detailed-offer.component';
import { OfferViewButtonsComponent } from './view-offer-page/offer-view-buttons/offer-view-buttons.component';
import { ViewOfferComponent } from './view-offer-page/view-offer/view-offer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
