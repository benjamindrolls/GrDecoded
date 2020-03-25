import { Injectable } from "@angular/core";
import { Restaurant } from "./restaurant";

//icon from google base - need to find a not-broken link
let foodIcon = "http://maps.google.com/mapfiles/kml/paddle";

@Injectable({
  providedIn: "root"
})

//Restaurant array
export class RestaurantService {
  restaurants: Restaurant[] = [
    {
      name: "Hopcat",
      address: " 130 Fulton Street W, Grand Rapids, MI 49503",
      position: new google.maps.LatLng(42.963, -85.67064),
      site: "https://www.hopcat.com/",
      options: {
        icon: foodIcon + "red-stars.png"
      }
    },
    {
      name: "Stella's Lounge",
      address: " 53 Commerce Ave SW, Grand Rapids, MI 49503",
      position: new google.maps.LatLng(42.961855, -85.669396),
      site: "https://www.stellasgr.com/",
      options: {
        icon: foodIcon + "red-stars.png"
      }
    },
    {
      name: "Rockwell Republic",
      address: " 45 Division Ave S, Grand Rapids, MI 49503",
      position: new google.maps.LatLng(42.96203, -85.668106),
      site: "https://rockwellrepublic.com/",
      options: {
        icon: foodIcon + "red-stars.png"
      }
    },
    {
      name: "Cottage Bar",
      address: " 18 La Grave Ave SE, Grand Rapids, MI 49503",
      position: new google.maps.LatLng(42.96309, -85.66521),
      site: "https://cottagebar.biz/",
      options: {
        icon: foodIcon + "red-stars.png"
      }
    },
    {
      name: "Z's Bar and Restaurant",
      address: " 168 Louis, Campau Promenade NW, Grand Rapids, MI 49503",
      position: new google.maps.LatLng(42.965869, -85.673063),
      site: "http://www.zsbar.com/",
      options: {
        icon: foodIcon + "red-stars.png"
      }
    },
    {
      name: "The Chop House Grand Rapids",
      address: " 190 Monroe Ave NW, Grand Rapids, MI 49503",
      position: new google.maps.LatLng(42.967330, -85.672012),
      site: "https://thechophousegrandrapids.com/",
      options: {
        icon: foodIcon + "red-stars.png"
      }
    },
    {
      name: "San Chez A Tapas Restaurant",
      address: " 38 Fulton St W, Grand Rapids, MI 49503",
      position: new google.maps.LatLng(42.963326, -85.669587),
      site: "https://www.sanchezbistro.com/",
      options: {
        icon: foodIcon + "red-stars.png"
      }
    },
    {
      name: "Bistro Bella Vita",
      address: " 44 Grandville Ave SW # 100, Grand Rapids, MI 49503",
      position: new google.maps.LatLng(42.962211, -85.673192),
      site: "https://bistrobellavita.com/",
      options: {
        icon: foodIcon + "red-stars.png"
      }
    },
  ];

  constructor() {}

  getRestaurant(): Restaurant[] {
    for (const restaurants of this.restaurants) {
        restaurants.name +
        '\n' + '\n' + '\n' + '\n' +
        restaurants.address +
        '\n' + '\n' +
        restaurants.site;
    }
    return this.restaurants;
  }
}
