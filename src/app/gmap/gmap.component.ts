import { Component, OnInit, ViewChild, AfterViewInit, Input } from "@angular/core";
import { GoogleMap, MapInfoWindow, MapMarker } from "@angular/google-maps";
import { ParkingMarkersService } from "../parking-markers.service";
import { Parking } from "../parking";
import { Venue } from '../venue';
import { VenuesService } from "../venues.service";
import { Restaurant } from "../restaurant";
import { RestaurantService } from "../restaurant.service";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: "app-gmap",
  templateUrl: "./gmap.component.html",
  styleUrls: ["./gmap.component.css"]
})
export class GmapComponent implements OnInit, AfterViewInit {
  park: Parking[];
  venue: Venue[];
  infoContent: string;
  restaurant: Restaurant[];
  directionService = new google.maps.DirectionsService();
  DirectionsRenderer = new google.maps.DirectionsRenderer();
  isbuttonVisible: boolean = false;
  constructor(
    public pService: ParkingMarkersService,
    public vService: VenuesService,
    // public parking: ParkingAPIService,
    public rService: RestaurantService,
    private snackBar: MatSnackBar,
    // restaurant: Restaurant[];
  ) { }

  //Decorator for Map
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;

  //Decorator for Info Pop Ups
  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;


  coords: any;
  venues: any;
  restaurants: any;
  duration: number;
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
    this.park = this.pService.park;

    this.pService.getFilteredData()

  }//--End of Initialization

  //renders the directions to the map
  ngAfterViewInit() {
    this.DirectionsRenderer.setMap(this.map._googleMap)
  }

  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++;
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--;
  }

  //method that sets the coordinates for parking structures
  setPosition(position) {

    this.coords = position


    return this.coords
  }

  //method that set coordinates for venues
  setVenue(event) {
    this.venues = event

    return this.venues
  }

  setRestaurant(event) {
    this.restaurants = event

    return this.restaurants
  }

  //method that calls a directions request and then displays them on map
  setDirections() {
    this.DirectionsRenderer.setMap(this.map._googleMap)
    let request = {
      origin: this.coords,
      destination: this.restaurants || this.venues,
      travelMode: google.maps.TravelMode.WALKING
    };
    if (request.origin && request.destination) {
      this.directionService.route(request, (result, status) => {
        if (status === "OK") {
          this.DirectionsRenderer.setDirections(result)
        }
      })
    } else {
      this.snackBar.open('Click on parking area, and then choose a venue or a restaurant to get directions', '', {
        duration: 2000
      })
    }
  }

  //stops direction from being rendered on the map
  stopDirections() {
    this.DirectionsRenderer.setMap(null)
  }


  //opening info content

  openInfo(marker: MapMarker, content) {
    this.infoContent = content;
    this.infoWindow.open(marker);
    console.log('info opened');
  }


}//--End of Export 
