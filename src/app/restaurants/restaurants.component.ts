import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from "@angular/google-maps";

import { Restaurant } from "../restaurant";
import { RestaurantService } from "../restaurant.service";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  infoContent: string;
  restaurant: Restaurant[];
  constructor(
    public rService: RestaurantService
  ) { }

  //Decorator for Info Pop Ups
  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;
  
  ngOnInit(){
        //Call Restaurant Markers
        this.restaurant = this.rService.getRestaurant();
  }//--End of Initialization

  //opening info content

  openInfo(marker: MapMarker, content) {
    this.infoContent = content;
    this.infoWindow.open(marker);
    console.log('info opened');
  }
  
  }//--End of Export 
