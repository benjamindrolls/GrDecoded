import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps'
import { ParkingMarkersService } from '../parking-markers.service';


@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css']
})
export class GmapComponent implements OnInit {

  constructor(private parkingMark: ParkingMarkersService) { }
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow

  zoom = 15
  Map: google.maps.Map
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 17,
    minZoom: 8,
  }

  infoContent = '<h1>hey testing</h1>'

  ngOnInit() {
      this.center = {
        lat: 42.963220,
        lng:-85.667900
      }
    
  }


  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--
  }

  openInfo(marker: MapMarker, content) {
    this.infoContent = content
    this.info.open(marker)
  }
  
  
}
