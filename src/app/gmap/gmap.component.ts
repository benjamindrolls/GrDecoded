import { Component, OnInit, ViewChild } from "@angular/core";
import { GoogleMap, MapInfoWindow, MapMarker } from "@angular/google-maps";
import { ParkingMarkersService } from "../parking-markers.service";
import { Parking } from "../parking";
import { Venue } from '../venue';
import { VenuesService } from "../venues.service";
import { ParkingAPIService } from '../parking-api.service';

@Component({
  selector: "app-gmap",
  templateUrl: "./gmap.component.html",
  styleUrls: ["./gmap.component.css"]
})
export class GmapComponent implements OnInit {
  park: Parking[];
  venue: Venue[];
  infoContent: string;
  constructor(
    private pService: ParkingMarkersService,
    public vService: VenuesService,
    // private direction: DirectionsService,
    public parking: ParkingAPIService
  ) { }

  //Decorator for Map
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;

  //Decorator for Info Pop Ups
  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;


  zoom = 15;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 17,
    minZoom: 8,
    styles: [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#ebe3cd"
          }
        ]
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#523735"
          }
        ]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#f5f1e6"
          }
        ]
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#c9b2a6"
          }
        ]
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#dcd2be"
          }
        ]
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#ae9e90"
          }
        ]
      },
      {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [
          {
            color: "#dfd2ae"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#dfd2ae"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#93817c"
          }
        ]
      },
      {
        featureType: "poi.business",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#a5b076"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#447530"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#f5f1e6"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            color: "#fdfcf8"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#f8c967"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#e9bc62"
          }
        ]
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [
          {
            color: "#e98d58"
          }
        ]
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#db8555"
          }
        ]
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#806b63"
          }
        ]
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
          {
            color: "#dfd2ae"
          }
        ]
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#8f7d77"
          }
        ]
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#ebe3cd"
          }
        ]
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
          {
            color: "#dfd2ae"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#b9d3c2"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#92998d"
          }
        ]
      }
    ]
  };//--End of Styles

//Sets Starting Map Location Over GR
  ngOnInit() {
    this.center = {
      lat: 42.96322,
      lng: -85.6679
    };

    //Call Parking Markers
    this.park = this.pService.getMarkers();
  
    //Call Venue Markers
    this.venue = this.vService.getVenue();


  }//--End of Initialization


  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++;
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--;
  }


  setDirections() {
    let directionService = new google.maps.DirectionsService();
    let DirectionsRenderer = new google.maps.DirectionsRenderer();
    DirectionsRenderer.setMap(this.map._googleMap);
    let request = {
      origin: { lat: 42.961518, lng: -85.674047 },
      destination: { lat:42.964024, lng:-85.670190 },
      travelMode: google.maps.TravelMode.DRIVING
    };
    directionService.route(request, function (result, status) {
      if (status === "OK") {
        DirectionsRenderer.setDirections(result)
      }
    })
  }


//opening info content

openInfo(marker: MapMarker, content) {
  this.infoContent = content;
  this.infoWindow.open(marker);
  console.log('info opened');
}

}//--End of Export 
