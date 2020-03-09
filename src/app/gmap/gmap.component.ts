import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps'
import { ParkingMarkersService } from '../parking-markers.service';


@Component({
  selector: "app-gmap",
  templateUrl: "./gmap.component.html",
  styleUrls: ["./gmap.component.css"]
})
export class GmapComponent implements OnInit {

  //Add marker, from tutorial 
  // addMarker() {
  //   this.markers.push({
  //     position: {
  //       lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
  //       lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
  //     },
  //     label: {
  //       color: 'red',
  //       text: 'Marker label ' + (this.markers.length + 1),
  //     },
  //     title: 'Marker title ' + (this.markers.length + 1),
  //     options: { animation: google.maps.Animation.BOUNCE },
  //   })
  // }
  //end of add marker

  venues = [
    {
      Name: "DeVos Performance Hall",
      Address: "303 Monroe Ave NW, Grand Rapids, MI 49503",
      Coords: "42.968266, -85.672856",
      E1: ["Alice Cooper", "Fri April 3", "8PM"],
      Link1: "https://www.devosperformancehall.com/events/2020/alice-cooper",
      E2: ["Celtic Woman", "Sat April 4", "7:30PM"],
      Link2: "https://www.devosperformancehall.com/events/2020/celtic-woman",
      Site: "https://www.devosperformancehall.com/", 
    },
    {
      Name: "20 Monroe Live",
      Address: "11 Ottowa Ave NW, Grand Rapids, MI 49503",
      Coords: "42.964056, -85.672489",
      E1: ["Prince Royce, Alter Ego Tour", "Thurs April 16", "7PM"],
      Link1: "https://www.20monroelive.com//EventDetail?tmeventid=080057672FCD748E&offerid=115098",
      E2: ["Gin Blossoms", "Tues April 21", "7PM"],
      Link2: "https://www.20monroelive.com//EventDetail?tmeventid=0800583F096F71B9&offerid=119495",
      Site: "https://www.20monroelive.com/"
    },
    {
      Name: "Van Andel Arena",
      Address: "130 Fulton St W, Grand Rapids, MI 49503",
      Coords: "42.962587, -85.671583",
      E1:["Elton John Farewell Yellow Brick Road Tour", "Thurs April 23", "8PM"],
      Link1:"https://www.vanandelarena.com/events/2020/elton-john-farewell-yellow-brick-road-tour",
      E2:["Jurrassic World Live Tour", "Thurs Oct 15", "7PM"],
      Link2:"https://www.vanandelarena.com/events/2020/jurassic-world-live-tour",
      Site:"https://www.vanandelarena.com/"
    },
    {
      Name: "The Pyramid Scheme",
      Address: "68 Commerce Ave SW, Grand Rapids, MI 49503",
      Coords: "42.961458, -85.668827",
      E1:["Music Against Human Trafficking", "Thurs April 2", "7PM"],
      Link1:"https://pyramidschemebar.com/event/music-against-human-trafficking/",
      E2:["Free Pinball Day", "Sun April 5", "4PM"],
      Link2:"https://pyramidschemebar.com/event/free-pinball-day/2020-04-05/",
      Site:"https://pyramidschemebar.com/"
    },
    {
      Name: "The Intersection",
      Address: "113 Grandville Ave SW, Grand Rapids, MI 49503",
      Coords: "42.960155, -85.673904",
      E1:["Cycles", "Wed April 8", "7PM"],
      Link1:"https://sectionlive.com/event/cycles/",
      E2:["Kayzo Lights Out", "Wed April 29", "8PM"],
      Link2:"https://sectionlive.com/event/kayzo-lights-out/",
      Site:"https://sectionlive.com/"
    },
    {
      Name: "The Listening Room",
      Address: "123 Ionia Ave SW, Grand Rapids, MI 49503",
      Coords: "42.960442, -85.670684",
      E1:["Outer Vibe", "Fri April 3", "7:30PM"],
      Link1:"https://listeningroomgr.com/shows-events/detail/Outer-Vibe",
      E2:["Troll For Trout", "Thurs April 16", "7:30PM"],
      Link2:"https://listeningroomgr.com/shows-events/detail/Troll-for-Trout",
      Site:"https://listeningroomgr.com/"
    },
    {
      Name: "Grand Rapids Symphony",
      Address: "300 Ottawa Ave NW, Ste 100, Grand Rapids, MI 49503",
      Coords: "42.969416, -85.669508",
      E1:["Mozart & Haydn", "Fri April 3", "8PM"],
      Link1:"https://www.grsymphony.org/mozart-haydn",
      E2:["Mahler's Resurrection", "Fri May 15", "8PM"],
      Link2:"https://www.grsymphony.org/mahlers-resurrection",
      Site:"https://www.grsymphony.org/"
    },
    {
      Name: "Meijer Gardens",
      Address: "1000 E Beltline Ave NE, Grand Rapids, MI 49525",
      Coords: "42.979845, -85.585671",
      E1:["Gregory Alan Isakov", "Sun June 7", "7PM"],
      Link1:"https://www.meijergardens.org/calendar/isakov20/",
      E2:["Tuesday Evening Music Club", "Tues July 7th", "7PM"],
      Link2:"https://www.meijergardens.org/calendar/tuesday-evening-music-club/",
      Site:"https://www.meijergardens.org/attractions/amphitheater-garden/"
    }
  ];

 

  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  // zoom = 12;
  // center: google.maps.LatLngLiteral;
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

  markers = [];
  infoContent = ''

  ngOnInit() {
      this.center = {
        lat: 42.963220,
        lng:-85.667900
      }
    

    let iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

    let parkingAreas = [
      {
        position: new google.maps.LatLng(42.960337, -85.675730),
        type: 'parking',
        options: {
          icon: iconBase + 'parking_lot_maps.png'
        }
      }, {
        position: new google.maps.LatLng(42.964024, -85.670190),
        type: 'parking',
        options: {
          icon: iconBase + 'parking_lot_maps.png'
        }
      }, {
        position: new google.maps.LatLng(42.964664, -85.672933),
        type: 'parking',
        options: {
          icon: iconBase + 'parking_lot_maps.png'
        }
      }, {
        position: new google.maps.LatLng(42.966231, -85.669396),
        type: 'parking',
        options: {
          icon: iconBase + 'parking_lot_maps.png'
        }
      }, {
        position: new google.maps.LatLng(42.966292, -85.672906),
        type: 'parking',
        options: {
          icon: iconBase + 'parking_lot_maps.png'
        }
      }, {
        position: new google.maps.LatLng(42.960251, -85.672147),
        type: 'parking',
        options: {
          icon: iconBase + 'parking_lot_maps.png'
        }
      }, {
        position: new google.maps.LatLng(42.961245, -85.671555),
        type: 'parking',
        options: {
          icon: iconBase + 'parking_lot_maps.png'
        }
      }, {
        position: new google.maps.LatLng(42.961642, -85.670597),
        type: 'parking',
        options: {
          icon: iconBase + 'parking_lot_maps.png'
        }
      }, {
        position: new google.maps.LatLng(42.959801, -85.669478),
        type: 'parking',
        options: {
          icon: iconBase + 'parking_lot_maps.png'
        }
      }, {
        position: new google.maps.LatLng(42.961518, -85.674047),
        type: 'parking',
        options: {
          icon: iconBase + 'parking_lot_maps.png',
        }
      },
    ];


    for (let i = 0; i < parkingAreas.length; i++) {
      this.markers.push(parkingAreas[i])
    };

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
