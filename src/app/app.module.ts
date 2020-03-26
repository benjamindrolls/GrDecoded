import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { GmapComponent } from './gmap/gmap.component';
import { ParkingAPIComponent } from './parking-api/parking-api.component';
import { VenuesComponent } from './venues/venues.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RestaurantsComponent } from './restaurants/restaurants.component';


@NgModule({
  declarations: [
    AppComponent,
    GmapComponent,
    ParkingAPIComponent,
    VenuesComponent,
    RestaurantsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
