import { Injectable, ViewChild } from '@angular/core';
import { Parking } from './parking';
import { MapInfoWindow } from "@angular/google-maps";
import { IParking } from './iparking';
import {HttpClient} from '@angular/common/http'


let iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
@Injectable({
  providedIn: 'root'
})
export class ParkingMarkersService {
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow
  infoContent = '<h1>hey testing</h1>'

  private baseFilterUrl: string = "https://grand-rapids-proxy.herokuapp.com/proxy/resource/nb67-knvp.json?parker_type=Total&$select=lot_name,count";
  
  constructor(private http: HttpClient) { }
  
  getFilteredData(category: IParking) {
      return this.http.get(
        `${this.baseFilterUrl}`
      );
    }

    //for each
  //.find to get count from static date, take object.info

  getMarkers(): Parking[] {
    return this.park;
  }

  park: Parking[] = [
    {
      position: new google.maps.LatLng(42.954982, -85.669240),
      type: 'parking',
      info: this.infoContent,
      title: 'McConnell Ionia Lot',
      lot_name: 'McConnel',
      options: {
        icon: iconBase + 'parking_lot_maps.png'
      }
    }, {
      position: new google.maps.LatLng(42.960099, -85.669162),
      type: 'parking',
      info: this.infoContent,
      title: 'Cherry Commerce Ramp',
      lot_name: 'Cherry Commerce Ramp',
      options: {
        icon: iconBase + 'parking_lot_maps.png'
      }
    }, {
      position: new google.maps.LatLng(42.960284, -85.672124),
      type: 'parking',
      info: this.infoContent,
      title: 'Studio Park Ramp',
      lot_name: 'McConnell Lower',
      options: {
        icon: iconBase + 'parking_lot_maps.png'
      }
    }, {
      position: new google.maps.LatLng(42.960232, -85.675817),
      type: 'parking',
      info: this.infoContent,
      title: 'Market St Lot',
      lot_name: '201 Market',
      options: {
        icon: iconBase + 'parking_lot_maps.png'
      }
    }, {
      position: new google.maps.LatLng(42.958515, -85.677476),
      type: 'parking',
      info: this.infoContent,
      title: 'Napa Lot',
      lot_name: 'Cherry Commerce Ramp',
      options: {
        icon: iconBase + 'parking_lot_maps.png'
      }
    }, {
      position: new google.maps.LatLng(42.962215, -85.668240),
      type: 'parking',
      info: this.infoContent,
      title: 'Weston Commerce Ramp',
      lot_name: 'Weston Commerce Ramp',
      options: {
        icon: iconBase + 'parking_lot_maps.png'
      }
    }, {
      position: new google.maps.LatLng(42.962961, -85.668589),
      type: 'parking',
      info: this.infoContent,
      title: 'The Gallery Ramp',
      lot_name: 'Gallery Ramp',
      options: {
        icon: iconBase + 'parking_lot_maps.png'
      }
    }, {
      position: new google.maps.LatLng(42.963962, -85.670997),
      type: 'parking',
      info: this.infoContent,
      title: 'Ottawa Fulton Ramp',
      lot_name: 'Ottawa Fulton',
      options: {
        icon: iconBase + 'parking_lot_maps.png'
      }
    }, {
      position: new google.maps.LatLng(42.964103, -85.669954),
      type: 'parking',
      info: this.infoContent,
      title: 'Monroe Center Ramp',
      lot_name: 'Monroe Center',
      options: {
        icon: iconBase + 'parking_lot_maps.png',
      }
    }, {
      position: new google.maps.LatLng(42.966205, -85.669302),
      type: 'parking',
      info: this.infoContent,
      title: 'Pearl Ionia Ramp',
      lot_name: 'Pearl Ionia',
      options: {
        icon: iconBase + 'parking_lot_maps.png',
      }
    },{
      position: new google.maps.LatLng(42.970200, -85.673664),
      type: 'parking',
      info: this.infoContent,
      title: 'DeVos Place Ramp',
      lot_name: 'Devos Place',
      options: {
        icon: iconBase + 'parking_lot_maps.png',
      }
    },{
      position: new google.maps.LatLng(42.969267, -85.671540),
      type: 'parking',
      info: this.infoContent,
      title: 'Government Center Ramp',
      lot_name: 'Government Center',
      options: {
        icon: iconBase + 'parking_lot_maps.png',
      }
    },{
      position: new google.maps.LatLng(42.961747, -85.670640),
      type: 'parking',
      info: this.infoContent,
      title: 'Area 3 Lot',
      lot_name: 'Area 3',
      options: {
        icon: iconBase + 'parking_lot_maps.png',
      }
    },{
      position: new google.maps.LatLng(42.960949, -85.672900),
      type: 'parking',
      info: this.infoContent,
      title: 'Area 2 Lot',
      lot_name: 'Area 2',
      options: {
        icon: iconBase + 'parking_lot_maps.png',
      }
    },{
      position: new google.maps.LatLng(42.959790, -85.672032),
      type: 'parking',
      info: this.infoContent,
      title: 'Area 6A Lot',
      lot_name: 'Area 6',
      options: {
        icon: iconBase + 'parking_lot_maps.png',
      }
    },{
      position: new google.maps.LatLng(42.968555, -85.682164),
      type: 'parking',
      info: this.infoContent,
      title: 'Area 9 Lot',
      lot_name: 'Area 9',
      options: {
        icon: iconBase + 'parking_lot_maps.png',
      }
    },{
      position: new google.maps.LatLng(42.969684, -85.681558),
      type: 'parking',
      info: this.infoContent,
      title: 'Area 8 Lot',
      lot_name: 'Area 8',
      options: {
        icon: iconBase + 'parking_lot_maps.png',
      }
    },{
      position: new google.maps.LatLng(42.968720, -85.679386),
      type: 'parking',
      info: this.infoContent,
      title: 'Area 7 Lot',
      lot_name: 'Area 7',
      options: {
        icon: iconBase + 'parking_lot_maps.png',
      }
    },{
      position: new google.maps.LatLng(42.968938, -85.677990),
      type: 'parking',
      info: this.infoContent,
      title: 'Scribner Lot',
      lot_name: 'Scribner',
      options: {
        icon: iconBase + 'parking_lot_maps.png',
      }
    },

  ];

}
