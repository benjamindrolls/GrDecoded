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
  iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
  parkingAreas = [{
    position: new google.maps.LatLng(42.960337, -85.675730),
    info: 'hey there buddy',
    options: {
      icon: this.iconBase + 'parking_lot_maps.png'
    }
  }, {
    position: new google.maps.LatLng(42.964024, -85.670190),
    type: 'parking',
    info: 'hey there son',
    options: {
      icon: this.iconBase + 'parking_lot_maps.png'
    }
  }, {
    position: new google.maps.LatLng(42.964664, -85.672933),
    type: 'parking',
    info: this.infoContent,
    options: {
      icon: this.iconBase + 'parking_lot_maps.png'
    }
  }, {
    position: new google.maps.LatLng(42.966231, -85.669396),
    type: 'parking',
    options: {
      icon: this.iconBase + 'parking_lot_maps.png'
    }
  }, {
    position: new google.maps.LatLng(42.966292, -85.672906),
    type: 'parking',
    options: {
      icon: this.iconBase + 'parking_lot_maps.png'
    }
  }, {
    position: new google.maps.LatLng(42.960251, -85.672147),
    type: 'parking',
    options: {
      icon: this.iconBase + 'parking_lot_maps.png'
    }
  }, {
    position: new google.maps.LatLng(42.961245, -85.671555),
    type: 'parking',
    options: {
      icon: this.iconBase + 'parking_lot_maps.png'
    }
  }, {
    position: new google.maps.LatLng(42.961642, -85.670597),
    type: 'parking',
    options: {
      icon: this.iconBase + 'parking_lot_maps.png'
    }
  }, {
    position: new google.maps.LatLng(42.959801, -85.669478),
    type: 'parking',
    options: {
      icon: this.iconBase + 'parking_lot_maps.png'
    }
  }, {
    position: new google.maps.LatLng(42.961518, -85.674047),
    type: 'parking',
    options: {
      icon: this.iconBase + 'parking_lot_maps.png',
    }
  },];

  ngOnInit() {
      this.center = {
        lat: 42.963220,
        lng:-85.667900
      }
    

    // let iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

    // let parkingAreas = [
    //   {
    //     position: new google.maps.LatLng(42.960337, -85.675730),
    //     info: 'hey there buddy',
    //     options: {
    //       icon: iconBase + 'parking_lot_maps.png'
    //     }
    //   }, {
    //     position: new google.maps.LatLng(42.964024, -85.670190),
    //     type: 'parking',
    //     info: 'hey there son',
    //     options: {
    //       icon: iconBase + 'parking_lot_maps.png'
    //     }
    //   }, {
    //     position: new google.maps.LatLng(42.964664, -85.672933),
    //     type: 'parking',
    //     info: this.infoContent,
    //     options: {
    //       icon: iconBase + 'parking_lot_maps.png'
    //     }
    //   }, {
    //     position: new google.maps.LatLng(42.966231, -85.669396),
    //     type: 'parking',
    //     options: {
    //       icon: iconBase + 'parking_lot_maps.png'
    //     }
    //   }, {
    //     position: new google.maps.LatLng(42.966292, -85.672906),
    //     type: 'parking',
    //     options: {
    //       icon: iconBase + 'parking_lot_maps.png'
    //     }
    //   }, {
    //     position: new google.maps.LatLng(42.960251, -85.672147),
    //     type: 'parking',
    //     options: {
    //       icon: iconBase + 'parking_lot_maps.png'
    //     }
    //   }, {
    //     position: new google.maps.LatLng(42.961245, -85.671555),
    //     type: 'parking',
    //     options: {
    //       icon: iconBase + 'parking_lot_maps.png'
    //     }
    //   }, {
    //     position: new google.maps.LatLng(42.961642, -85.670597),
    //     type: 'parking',
    //     options: {
    //       icon: iconBase + 'parking_lot_maps.png'
    //     }
    //   }, {
    //     position: new google.maps.LatLng(42.959801, -85.669478),
    //     type: 'parking',
    //     options: {
    //       icon: iconBase + 'parking_lot_maps.png'
    //     }
    //   }, {
    //     position: new google.maps.LatLng(42.961518, -85.674047),
    //     type: 'parking',
    //     options: {
    //       icon: iconBase + 'parking_lot_maps.png',
    //     }
    //   },
    // ];


    // for (let i = 0; i < parkingAreas.length; i++) {
    //   this.markers.push(parkingAreas[i])
    // };

    
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
