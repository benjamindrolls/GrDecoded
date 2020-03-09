import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParkingMarkersService {

  constructor() { }
  markers = [];

  iconBase = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/';

  features = [
    {
      position: new google.maps.LatLng(42.960337, -85.675730),
      type: 'parking',
      icon: this.iconBase + 'parking_lot_maps.png'
    }, {
      position: new google.maps.LatLng(42.964024, -85.670190),
      type: 'parking',
      icon: this.iconBase + 'parking_lot_maps.png'
    }, {
      position: new google.maps.LatLng(42.964664, -85.672933),
      type: 'parking',
      icon: this.iconBase + 'parking_lot_maps.png'
    }, {
      position: new google.maps.LatLng(42.966231, -85.669396),
      type: 'parking',
      icon: this.iconBase + 'parking_lot_maps.png'
    }, {
      position: new google.maps.LatLng(42.966292, -85.672906),
      type: 'parking',
      icon: this.iconBase + 'parking_lot_maps.png'
    }, {
      position: new google.maps.LatLng(42.960251, -85.672147),
      type: 'parking',
      icon: this.iconBase + 'parking_lot_maps.png'
    }, {
      position: new google.maps.LatLng(42.961245, -85.671555),
      type: 'parking',
      icon: this.iconBase + 'parking_lot_maps.png'
    }, {
      position: new google.maps.LatLng(42.961642, -85.670597),
      type: 'parking',
      icon: this.iconBase + 'parking_lot_maps.png'
    }, {
      position: new google.maps.LatLng(42.959801, -85.669478),
      type: 'parking',
      icon: this.iconBase + 'parking_lot_maps.png'
    }, {
      position: new google.maps.LatLng(42.961518, -85.674047),
      type: 'parking',
      icon: this.iconBase + 'parking_lot_maps.png'
    },

  ];

  // Create markers.
  setMarkers() {
    for (let i = 0; i < this.features.length; i++) {
      this.markers.push(this.features[i])
    };
  };
}


  // setMarkers() {
  //   this.markers.push({
  //     position: {
  //       lat: 42.960337, lng: -85.675730
  //     },
  //     label: {
  //       color: 'red',
  //     },
  //     title: 'Marker title ' + (this.markers.length + 1),
  //     info: 'Marker info ' + (this.markers.length + 1),
  //     options: {
  //       animation: google.maps.Animation.BOUNCE,
  //     }
  //   })
  //   this.markers.push({
  //     position: {
  //       lat: 42.963338, lng: -85.670463
  //     },
  //     label: {
  //       color: 'red',
  //     },
  //     title: 'fulton and owtawa ' + (this.markers.length + 1),
  //     info: 'Marker info ' + (this.markers.length + 1),
  //     options: {
  //       animation: google.maps.Animation.BOUNCE,
  //     }
  //   })
  //   this.markers.push({
  //     position: {
  //       lat: 42.964024, lng: -85.670190
  //     },
  //     label: {
  //       color: 'red',
  //     },
  //     title: 'monroe center ramp ' + (this.markers.length + 1),
  //     info: 'Marker info ' + (this.markers.length + 1),
  //     options: {
  //       animation: google.maps.Animation.BOUNCE,
  //     }
  //   })
  //   this.markers.push({
  //     position: {
  //       lat: 42.964664, lng: -85.672933
  //     },
  //     label: {
  //       color: 'red',
  //     },
  //     title: 'louis-campau ramp' + (this.markers.length + 1),
  //     info: 'Marker info ' + (this.markers.length + 1),
  //     options: {
  //       animation: google.maps.Animation.BOUNCE,
  //     }
  //   })
  //   this.markers.push({
  //     position: {
  //       lat: 42.966231, lng: -85.669396
  //     },
  //     label: {
  //       color: 'red',
  //     },
  //     title: 'pearl and ionia ramp' + (this.markers.length + 1),
  //     info: 'Marker info ' + (this.markers.length + 1),
  //     options: {
  //       animation: google.maps.Animation.BOUNCE,
  //     }
  //   })
  //   this.markers.push({
  //     position: {
  //       lat: 42.966292, lng: -85.672906
  //     },
  //     label: {
  //       color: 'red',
  //     },
  //     title: 'amway grand garage' + (this.markers.length + 1),
  //     info: 'Marker info ' + (this.markers.length + 1),
  //     options: {
  //       animation: google.maps.Animation.BOUNCE,
  //     }
  //   })
  //   this.markers.push({
  //     position: {
  //       lat: 42.960251, lng: -85.672147
  //     },
  //     label: {
  //       color: 'red',
  //     },
  //     title: 'studio parking' + (this.markers.length + 1),
  //     info: 'Marker info ' + (this.markers.length + 1),
  //     options: {
  //       animation: google.maps.Animation.BOUNCE,
  //     }
  //   })
  //   this.markers.push({
  //     position: {
  //       lat: 42.961245, lng: -85.671555
  //     },
  //     label: {
  //       color: 'red',
  //     },
  //     title: 'area 2 parking' + (this.markers.length + 1),
  //     info: 'Marker info ' + (this.markers.length + 1),
  //     options: {
  //       animation: google.maps.Animation.BOUNCE,
  //     }
  //   })
  //   this.markers.push({
  //     position: {
  //       lat: 42.961642, lng: -85.670597
  //     },
  //     label: {
  //       color: 'red',
  //     },
  //     title: 'area 3 parking' + (this.markers.length + 1),
  //     info: 'Marker info ' + (this.markers.length + 1),
  //     options: {
  //       animation: google.maps.Animation.BOUNCE,
  //     }
  //   })
  //   this.markers.push({
  //     position: {
  //       lat: 42.959801, lng: -85.669478
  //     },
  //     label: {
  //       color: 'red',
  //     },
  //     title: 'parking cheery and commerce' + (this.markers.length + 1),
  //     info: 'Marker info ' + (this.markers.length + 1),
  //     options: {
  //       animation: google.maps.Animation.BOUNCE,
  //     }
  //   })
  //   this.markers.push({
  //     position: {
  //       lat: 42.961518, lng: -85.674047
  //     },
  //     label: {
  //       color: 'red',
  //     },
  //     title: '90 market lot' + (this.markers.length + 1),
  //     info: 'Marker info ' + (this.markers.length + 1),
  //     options: {
  //       animation: google.maps.Animation.BOUNCE,
  //     }
  //   })
  //   return this.markers;
  // }
