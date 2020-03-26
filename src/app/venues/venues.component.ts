import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from "@angular/google-maps";

import { Venue } from '../venue';
import { VenuesService } from '../venues.service';



@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})
export class VenuesComponent implements OnInit {
  infoContent: string;
  venue : Venue [];
  venues: any;
  constructor(
    public vService: VenuesService,
  ) { }

    //Decorator for Info Pop Ups
    @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;

  ngOnInit(){
        //Call Venue Markers
        this.venue = this.vService.getVenue();
  }//End of Initialization

  //opening info content
  setVenue(position) {
    this.venues = position
    return this.venues
  }

  openInfo(marker: MapMarker, content) {
    this.infoContent = content;
    this.infoWindow.open(marker);
    console.log('info opened');
  }
  
  }//--End of Export 
