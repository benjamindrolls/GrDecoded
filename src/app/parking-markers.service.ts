import { Injectable, ViewChild } from '@angular/core';
import { Parking } from './parking';
import { MapInfoWindow } from "@angular/google-maps";


let iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
@Injectable({
  providedIn: 'root'
})
export class ParkingMarkersService {
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow
  infoContent = '<h1>hey testing</h1>'
  park: Parking[] = [
    {
      position: new google.maps.LatLng(42.954982, -85.669240),
      type: 'parking',
      info: this.infoContent,
      title: 'McConnell Ionia Lot',
      options: {
        icon: iconBase + 'parking_lot_maps.png'
      }
    }, {
      position: new google.maps.LatLng(42.960099, -85.669162),
      type: 'parking',
      info: this.infoContent,
      title: 'Cherry Commerce Ramp',
      options: {
        icon: iconBase + 'parking_lot_maps.png'
      }
    }, {
      position: new google.maps.LatLng(42.960284, -85.672124),
      type: 'parking',
      info: this.infoContent,
      title: 'Studio Park Ramp',
      options: {
        icon: iconBase + 'parking_lot_maps.png'
      }
    }, {
      position: new google.maps.LatLng(42.960232, -85.675817),
      type: 'parking',
      info: this.infoContent,
      title: 'Market St Lot',
      options: {
        icon: iconBase + 'parking_lot_maps.png'
      }
    }, {
      position: new google.maps.LatLng(42.958515, -85.677476),
      type: 'parking',
      info: this.infoContent,
      title: 'Napa Lot',
      options: {
        icon: iconBase + 'parking_lot_maps.png'
      }
    }, {
      position: new google.maps.LatLng(42.962215, -85.668240),
      type: 'parking',
      info: this.infoContent,
      title: 'Weston Commerce Ramp',
      options: {
        icon: iconBase + 'parking_lot_maps.png'
      }
    }, {
      position: new google.maps.LatLng(42.962961, -85.668589),
      type: 'parking',
      info: this.infoContent,
      title: 'The Gallery Ramp',
      options: {
        icon: iconBase + 'parking_lot_maps.png'
      }
    }, {
      position: new google.maps.LatLng(42.963962, -85.670997),
      type: 'parking',
      info: this.infoContent,
      title: 'Ottawa Fulton Ramp',
      options: {
        icon: iconBase + 'parking_lot_maps.png'
      }
    }, {
      position: new google.maps.LatLng(42.964103, -85.669954),
      type: 'parking',
      info: this.infoContent,
      title: 'Monroe Center Ramp',
      options: {
        icon: iconBase + 'parking_lot_maps.png',
      }
    }, {
      position: new google.maps.LatLng(42.966205, -85.669302),
      type: 'parking',
      info: this.infoContent,
      title: 'Pearl Ionia Ramp',
      options: {
        icon: iconBase + 'parking_lot_maps.png',
      }
    },{
      position: new google.maps.LatLng(42.970200, -85.673664),
      type: 'parking',
      info: this.infoContent,
      title: 'DeVos Place Ramp',
      options: {
        icon: iconBase + 'parking_lot_maps.png',
      }
    },{
      position: new google.maps.LatLng(42.969267, -85.671540),
      type: 'parking',
      info: this.infoContent,
      title: 'Government Center Ramp',
      options: {
        icon: iconBase + 'parking_lot_maps.png',
      }
    },{
      position: new google.maps.LatLng(42.961747, -85.670640),
      type: 'parking',
      info: this.infoContent,
      title: 'Area 3 Lot',
      options: {
        icon: iconBase + 'parking_lot_maps.png',
      }
    },{
      position: new google.maps.LatLng(42.960949, -85.672900),
      type: 'parking',
      info: this.infoContent,
      title: 'Area 2 Lot',
      options: {
        icon: iconBase + 'parking_lot_maps.png',
      }
    },{
      position: new google.maps.LatLng(42.959790, -85.672032),
      type: 'parking',
      info: this.infoContent,
      title: 'Area 6A Lot',
      options: {
        icon: iconBase + 'parking_lot_maps.png',
      }
    },{
      position: new google.maps.LatLng(42.968555, -85.682164),
      type: 'parking',
      info: this.infoContent,
      title: 'Area 9 Lot',
      options: {
        icon: iconBase + 'parking_lot_maps.png',
      }
    },{
      position: new google.maps.LatLng(42.969684, -85.681558),
      type: 'parking',
      info: this.infoContent,
      title: 'Area 8 Lot',
      options: {
        icon: iconBase + 'parking_lot_maps.png',
      }
    },{
      position: new google.maps.LatLng(42.968720, -85.679386),
      type: 'parking',
      info: this.infoContent,
      title: 'Area 7 Lot',
      options: {
        icon: iconBase + 'parking_lot_maps.png',
      }
    },{
      position: new google.maps.LatLng(42.968938, -85.677990),
      type: 'parking',
      info: this.infoContent,
      title: 'Scribner Lot',
      options: {
        icon: iconBase + 'parking_lot_maps.png',
      }
    },

  ];

  // navigator.geolocation.getCurrentPosition(function(position) {
  //   //   let pos = {
  //   //     lat: position.coords.latitude,
  //   //     lng: position.coords.longitude
  //   //   }
  constructor() { };

  getMarkers(): Parking[] {
    return this.park;
  }

}
