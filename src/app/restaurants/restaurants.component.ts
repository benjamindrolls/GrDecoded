import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from "@angular/google-maps";

import { Restaurant } from "../restaurant";
import { RestaurantService } from "../restaurant.service";
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  infoContent: string;
  restaurant: Restaurant[];
  restaurants: any;
  constructor(
    public rService: RestaurantService
  ) { }

  @Output() rDirections = new EventEmitter()

  //Decorator for Info Pop Ups
  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;
  
  ngOnInit(){
        //Call Restaurant Markers
        this.restaurant = this.rService.getRestaurant();
  }//--End of Initialization

  setRestaurants(position) {
    this.restaurants = position
    this.rDirections.emit(this.restaurants)
  }

  //opening info content

  openInfo(marker: MapMarker, content) {
    this.infoContent = content;
    this.infoWindow.open(marker);
    console.log('info opened');
  }
  
  }//--End of Export 
