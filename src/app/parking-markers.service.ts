import { Injectable, ViewChild } from '@angular/core';
import { Parking } from './parking';


//Marker for Parking Icon
let iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

@Injectable({
  providedIn: 'root'
})
export class ParkingMarkersService {

//TESTING INFO WINDOW CONTENT DELETE
  infoContent = 'PARK HERE NOW!'


  //Parking Information Array {{MAKE FUNCTION TO INPUT PARKING RATES (or random rates with no api)}}
  park: Parking[] = [
    {
      position: new google.maps.LatLng(42.960337, -85.675730),
      type: 'parking',
      info: this.infoContent,
      options: {
        icon: iconBase + 'parking_lot_maps.png'
      }
    }, {
      position: new google.maps.LatLng(42.964024, -85.670190),
      type: 'parking',
      info: this.infoContent,
      options: {
        icon: iconBase + 'parking_lot_maps.png'
      }
    }, {
      position: new google.maps.LatLng(42.964664, -85.672933),
      type: 'parking',
      info: this.infoContent,
      options: {
        icon: iconBase + 'parking_lot_maps.png'
      }
    }, {
      position: new google.maps.LatLng(42.966231, -85.669396),
      type: 'parking',
      info: this.infoContent,
      options: {
        icon: iconBase + 'parking_lot_maps.png'
      }
    }, {
      position: new google.maps.LatLng(42.966292, -85.672906),
      type: 'parking',
      info: this.infoContent,
      options: {
        icon: iconBase + 'parking_lot_maps.png'
      }
    }, {
      position: new google.maps.LatLng(42.960251, -85.672147),
      type: 'parking',
      info: this.infoContent,
      options: {
        icon: iconBase + 'parking_lot_maps.png'
      }
    }, {
      position: new google.maps.LatLng(42.961245, -85.671555),
      type: 'parking',
      info: this.infoContent,
      options: {
        icon: iconBase + 'parking_lot_maps.png'
      }
    }, {
      position: new google.maps.LatLng(42.961642, -85.670597),
      type: 'parking',
      info: this.infoContent,
      options: {
        icon: iconBase + 'parking_lot_maps.png'
      }
    }, {
      position: new google.maps.LatLng(42.959801, -85.669478),
      type: 'parking',
      info: this.infoContent,
      options: {
        icon: iconBase + 'parking_lot_maps.png',
      }
    }, {
      position: new google.maps.LatLng(42.961518, -85.674047),
      type: 'parking',
      info: this.infoContent,
      options: {
        icon: iconBase + 'parking_lot_maps.png',
      }
    },

  ];//--End Of Parking Array


  constructor() { };

  //Function for compiling array for Gmap Component
  getMarkers(): Parking[] {
    return this.park;
  }

}//--End of Parking Service

