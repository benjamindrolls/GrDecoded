import { Injectable, ViewChild} from "@angular/core";
import { Restaurant } from "./restaurant";
import { MapInfoWindow } from "@angular/google-maps";

//icon from google base - need to find a not-broken link
let foodIcon = "http://maps.google.com/mapfiles/kml/pal2/icon37.png";

@Injectable({
  providedIn: "root"
})



//Restaurants array
export class RestaurantService {
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow
  //TESTING INFO WINDOW CONTENT DELETE
  infoContent = "Test";

  restaurants: Restaurant[] = [
    {
      name: "Hopcat",
      info: this.infoContent,
      address: " 130 Fulton Street W, Grand Rapids, MI 49503",
      position: new google.maps.LatLng(42.963, -85.67064),
      site: "https://www.hopcat.com/",
      options: {
        icon: foodIcon
      }
    },
    {
      name: "Stella's Lounge",
      info: this.infoContent,
      address: " 53 Commerce Ave SW, Grand Rapids, MI 49503",
      position: new google.maps.LatLng(42.961855, -85.669396),
      site: "https://www.stellasgr.com/",
      options: {
        icon: foodIcon
      }
    },
    {
      name: "Rockwell Republic",
      info: this.infoContent,
      address: " 45 Division Ave S, Grand Rapids, MI 49503",
      position: new google.maps.LatLng(42.96203, -85.668106),
      site: "https://rockwellrepublic.com/",
      options: {
        icon: foodIcon 
      }
    },
    {
      name: "Cottage Bar",
      info: this.infoContent,
      address: " 18 La Grave Ave SE, Grand Rapids, MI 49503",
      position: new google.maps.LatLng(42.96309, -85.66521),
      site: "https://cottagebar.biz/",
      options: {
        icon: foodIcon
      }
    },
    {
      name: "Z's Bar and Restaurant",
      info: this.infoContent,
      address: " 168 Louis, Campau Promenade NW, Grand Rapids, MI 49503",
      position: new google.maps.LatLng(42.965869, -85.673063),
      site: "http://www.zsbar.com/",
      options: {
        icon: foodIcon
      }
    },
    {
      name: "The Chop House Grand Rapids",
      info: this.infoContent,
      address: " 190 Monroe Ave NW, Grand Rapids, MI 49503",
      position: new google.maps.LatLng(42.967330, -85.672012),
      site: "https://thechophousegrandrapids.com/",
      options: {
        icon: foodIcon
      }
    },
    {
      name: "San Chez A Tapas Restaurant",
      info: this.infoContent,
      address: " 38 Fulton St W, Grand Rapids, MI 49503",
      position: new google.maps.LatLng(42.963326, -85.669587),
      site: "https://www.sanchezbistro.com/",
      options: {
        icon: foodIcon
      }
    },
    {
      name: "Bistro Bella Vita",
      info: this.infoContent,
      address: " 44 Grandville Ave SW # 100, Grand Rapids, MI 49503",
      position: new google.maps.LatLng(42.962211, -85.673192),
      site: "https://bistrobellavita.com/",
      options: {
        icon: foodIcon 
      }
    },
  ];
   

  constructor() {}

  getRestaurant(): Restaurant[] {
    for (const restaurant of this.restaurants) {
      restaurant.info = [
    '<div class="r_name">'+ restaurant.name + '</div>'+
    '<div class="r_address">'+ restaurant.address + '</div>'+
    '<a class="r_link" href="'+ restaurant.site +'" target="_blank">'+ restaurant.site +'/>'
      ];
    }
    return this.restaurants;
  }
}
