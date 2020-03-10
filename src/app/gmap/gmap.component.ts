import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps'
import { ParkingMarkersService } from '../parking-markers.service';
import { Parking } from '../parking';
import { VenuesService } from '../venues.service';


@Component({
  selector: "app-gmap",
  templateUrl: "./gmap.component.html",
  styleUrls: ["./gmap.component.css"]
})
export class GmapComponent implements OnInit {

  park: Parking[];

  constructor(private service: ParkingMarkersService, public venue: VenuesService) { }
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow
  
  zoom = 15
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 17,
    minZoom: 8,

  }

  infoContent = ''


  ngOnInit() {
      this.center = {
        lat: 42.963220,
        lng:-85.667900
      }
      this.park = this.service.getMarkers();
      //venue for loop
    this.getVenue()
  }

    
  
  getVenue(){
    this.venue.venues;
  }

  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++;
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--;
  }


  test() {
    console.log("hello")
  }
}