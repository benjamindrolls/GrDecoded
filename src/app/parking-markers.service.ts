import { Injectable, ViewChild } from '@angular/core';
import { Parking } from './parking';
import { MapInfoWindow } from "@angular/google-maps";
import { IParking } from './iparking';
import { HttpClient } from '@angular/common/http'
import { Title } from '@angular/platform-browser';


let iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
@Injectable({
  providedIn: 'root'
})
export class ParkingMarkersService {
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow


  private baseFilterUrl: string = "https://grand-rapids-proxy.herokuapp.com/parking?parker_type=Total&$select=lot_name,count";

  constructor(private http: HttpClient) { this.getFilteredData() }

  getFilteredData() {
    this.http.get(
      `${this.baseFilterUrl}`
    ).subscribe((data: IParking[]) => {
      this.data = data
      this.park = this.getParking()
    });

  }

  infoContent(lot_name, title) {
    const info = this.data.find(data => data.lot_name === lot_name)
    return `<h2>${title}</h2>
    <p>Current Capacity: ${info.count}</p>`

  }

  //for each
  //.find to get count from static date, take object.info
  data = [];
  // const found = array1.find(element => element > 10);


  getMarkers(): Parking[] {
    return this.park;
  }

  getParking() {
    return [
      {
        position: new google.maps.LatLng(42.954982, -85.669240),
        type: 'parking',
        info: this.infoContent('McConnell', 'McConnell Ionia Lot'),
        title: 'McConnell Ionia Lot',
        lot_name: 'McConnell',
        options: {
          icon: iconBase + 'parking_lot_maps.png'
        }
      }, {
        position: new google.maps.LatLng(42.960099, -85.669162),
        type: 'parking',
        info: this.infoContent('Cherry Commerce Ramp', 'Cherry Commerce Ramp'),
        title: 'Cherry Commerce Ramp',
        lot_name: 'Cherry Commerce Ramp',
        options: {
          icon: iconBase + 'parking_lot_maps.png'
        }
      }, {
        position: new google.maps.LatLng(42.960284, -85.672124),
        type: 'parking',
        info: this.infoContent('McConnell Lower', 'Studio Park Ramp'),
        title: 'Studio Park Ramp',
        lot_name: 'McConnell Lower',
        options: {
          icon: iconBase + 'parking_lot_maps.png'
        }
      }, {
        position: new google.maps.LatLng(42.960232, -85.675817),
        type: 'parking',
        info: this.infoContent('201 Market', 'Market St Lot'),
        title: 'Market St Lot',
        lot_name: '201 Market',
        options: {
          icon: iconBase + 'parking_lot_maps.png'
        }
      }, {
        position: new google.maps.LatLng(42.958515, -85.677476),
        type: 'parking',
        info: this.infoContent('Cherry Commerce Ramp', 'Napa Lot'),
        title: 'Napa Lot',
        lot_name: 'Cherry Commerce Ramp',
        options: {
          icon: iconBase + 'parking_lot_maps.png'
        }
      }, {
        position: new google.maps.LatLng(42.962215, -85.668240),
        type: 'parking',
        info: this.infoContent('Weston Commerce Ramp', 'Weston Commerce Ramp'),
        title: 'Weston Commerce Ramp',
        lot_name: 'Weston Commerce Ramp',
        options: {
          icon: iconBase + 'parking_lot_maps.png'
        }
      }, {
        position: new google.maps.LatLng(42.962961, -85.668589),
        type: 'parking',
        info: this.infoContent('Gallery Ramp', 'The Gallery Ramp'),
        title: 'The Gallery Ramp',
        lot_name: 'Gallery Ramp',
        options: {
          icon: iconBase + 'parking_lot_maps.png'
        }
      }, {
        position: new google.maps.LatLng(42.963962, -85.670997),
        type: 'parking',
        info: this.infoContent('Ottawa Fulton', 'Ottawa Fulton Ramp'),
        title: 'Ottawa Fulton Ramp',
        lot_name: 'Ottawa Fulton',
        options: {
          icon: iconBase + 'parking_lot_maps.png'
        }
      }, {
        position: new google.maps.LatLng(42.964103, -85.669954),
        type: 'parking',
        info: this.infoContent('Monroe Center', 'Monroe Center Ramp'),
        title: 'Monroe Center Ramp',
        lot_name: 'Monroe Center',
        options: {
          icon: iconBase + 'parking_lot_maps.png',
        }
      }, {
        position: new google.maps.LatLng(42.966205, -85.669302),
        type: 'parking',
        info: this.infoContent('Pearl Ionia', 'Pearl Ionia Ramp'),
        title: 'Pearl Ionia Ramp',
        lot_name: 'Pearl Ionia',
        options: {
          icon: iconBase + 'parking_lot_maps.png',
        }
      }, {
        position: new google.maps.LatLng(42.970200, -85.673664),
        type: 'parking',
        info: this.infoContent('Devos Place', 'Devos Place Ramp'),
        title: 'DeVos Place Ramp',
        lot_name: 'Devos Place',
        options: {
          icon: iconBase + 'parking_lot_maps.png',
        }
      }, {
        position: new google.maps.LatLng(42.969267, -85.671540),
        type: 'parking',
        info: this.infoContent('Government Center', 'Government Center Ramp'),
        title: 'Government Center Ramp',
        lot_name: 'Government Center',
        options: {
          icon: iconBase + 'parking_lot_maps.png',
        }
      }, {
        position: new google.maps.LatLng(42.961747, -85.670640),
        type: 'parking',
        info: this.infoContent('Area 3', 'area 3 Lot'),
        title: 'Area 3 Lot',
        lot_name: 'Area 3',
        options: {
          icon: iconBase + 'parking_lot_maps.png',
        }
      }, {
        position: new google.maps.LatLng(42.960949, -85.672900),
        type: 'parking',
        info: this.infoContent('Area 2', 'Area 2 Lot'),
        title: 'Area 2 Lot',
        lot_name: 'Area 2',
        options: {
          icon: iconBase + 'parking_lot_maps.png',
        }
      }, {
        position: new google.maps.LatLng(42.959790, -85.672032),
        type: 'parking',
        info: this.infoContent('Area 6', 'Area 6A Lot'),
        title: 'Area 6A Lot',
        lot_name: 'Area 6',
        options: {
          icon: iconBase + 'parking_lot_maps.png',
        }
      }, {
        position: new google.maps.LatLng(42.968555, -85.682164),
        type: 'parking',
        info: this.infoContent('Area 9', 'Area 9 Lot'),
        title: 'Area 9 Lot',
        lot_name: 'Area 9',
        options: {
          icon: iconBase + 'parking_lot_maps.png',
        }
      }, {
        position: new google.maps.LatLng(42.969684, -85.681558),
        type: 'parking',
        info: this.infoContent('Area 8', 'Area 8 Lot'),
        title: 'Area 8 Lot',
        lot_name: 'Area 8',
        options: {
          icon: iconBase + 'parking_lot_maps.png',
        }
      }, {
        position: new google.maps.LatLng(42.968720, -85.679386),
        type: 'parking',
        info: this.infoContent('Area 7', 'Area 7 Lot'),
        title: 'Area 7 Lot',
        lot_name: 'Area 7',
        options: {
          icon: iconBase + 'parking_lot_maps.png',
        }
      }, {
        position: new google.maps.LatLng(42.968938, -85.677990),
        type: 'parking',
        info: this.infoContent('Scribner', 'Scribner Lot'),
        title: 'Scribner Lot',
        lot_name: 'Scribner',
        options: {
          icon: iconBase + 'parking_lot_maps.png',
        }
      },

    ];


  }

  park: Parking[] = [];
}