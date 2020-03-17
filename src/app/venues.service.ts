import { Injectable } from '@angular/core';
import { Venue } from './venue';

//Marker for Venue Icon 
let starIcon = 'http://maps.google.com/mapfiles/kml/paddle/';

@Injectable({
  providedIn: 'root'
})
export class VenuesService {
  
  infoContent = 'I AM A VENUE AHHHHHHH'

  //Venue Information Array  
    venues: Venue[] = [
      {
        Name: "DeVos Performance Hall",
        Address: "303 Monroe Ave NW, Grand Rapids, MI 49503",
        info: this.infoContent,
        position: new google.maps.LatLng(42.968266, -85.672856),
        E1: ["Alice Cooper", "Fri April 3", "8PM"],
        Link1: "https://www.devosperformancehall.com/events/2020/alice-cooper",
        E2: ["Celtic Woman", "Sat April 4", "7:30PM"],
        Link2: "https://www.devosperformancehall.com/events/2020/celtic-woman",
        Site: "https://www.devosperformancehall.com/",
        options: {
          icon: starIcon + 'ylw-stars.png'
        }
      },
      {
        Name: "20 Monroe Live",
        Address: "11 Ottowa Ave NW, Grand Rapids, MI 49503",
        info: this.infoContent,
        position: new google.maps.LatLng(42.964056, -85.672489),
        E1: ["Prince Royce, Alter Ego Tour", "Thurs April 16", "7PM"],
        Link1: "https://www.20monroelive.com//EventDetail?tmeventid=080057672FCD748E&offerid=115098",
        E2: ["Gin Blossoms", "Tues April 21", "7PM"],
        Link2: "https://www.20monroelive.com//EventDetail?tmeventid=0800583F096F71B9&offerid=119495",
        Site: "https://www.20monroelive.com/",
        options: {
          icon: starIcon + 'ylw-stars.png'
        } 
      },
      {
        Name: "Van Andel Arena",
        Address: "130 Fulton St W, Grand Rapids, MI 49503",
        info: this.infoContent,
        position: new google.maps.LatLng(42.962587, -85.671583),
        E1:["Elton John Farewell Yellow Brick Road Tour", "Thurs April 23", "8PM"],
        Link1:"https://www.vanandelarena.com/events/2020/elton-john-farewell-yellow-brick-road-tour",
        E2:["Jurrassic World Live Tour", "Thurs Oct 15", "7PM"],
        Link2:"https://www.vanandelarena.com/events/2020/jurassic-world-live-tour",
        Site:"https://www.vanandelarena.com/",
        options: {
          icon: starIcon + 'ylw-stars.png'
        } 
      },
      {
        Name: "The Pyramid Scheme",
        Address: "68 Commerce Ave SW, Grand Rapids, MI 49503",
        info: this.infoContent,
        position: new google.maps.LatLng(42.961458, -85.668827),
        E1:["Music Against Human Trafficking", "Thurs April 2", "7PM"],
        Link1:"https://pyramidschemebar.com/event/music-against-human-trafficking/",
        E2:["Free Pinball Day", "Sun April 5", "4PM"],
        Link2:"https://pyramidschemebar.com/event/free-pinball-day/2020-04-05/",
        Site:"https://pyramidschemebar.com/",
        options: {
          icon: starIcon + 'ylw-stars.png'
        } 
      },
      {
        Name: "The Intersection",
        Address: "113 Grandville Ave SW, Grand Rapids, MI 49503",
        info: this.infoContent,
        position: new google.maps.LatLng(42.960155, -85.673904),
        E1:["Cycles", "Wed April 8", "7PM"],
        Link1:"https://sectionlive.com/event/cycles/",
        E2:["Kayzo Lights Out", "Wed April 29", "8PM"],
        Link2:"https://sectionlive.com/event/kayzo-lights-out/",
        Site:"https://sectionlive.com/",
        options: {
          icon: starIcon + 'ylw-stars.png'
        } 
      },
      {
        Name: "The Listening Room",
        Address: "123 Ionia Ave SW, Grand Rapids, MI 49503",
        info: this.infoContent,
        position: new google.maps.LatLng(42.960442, -85.670684),
        E1:["Outer Vibe", "Fri April 3", "7:30PM"],
        Link1:"https://listeningroomgr.com/shows-events/detail/Outer-Vibe",
        E2:["Troll For Trout", "Thurs April 16", "7:30PM"],
        Link2:"https://listeningroomgr.com/shows-events/detail/Troll-for-Trout",
        Site:"https://listeningroomgr.com/",
        options: {
          icon: starIcon + 'ylw-stars.png'
        } 
      },
      {
        Name: "Grand Rapids Symphony",
        Address: "300 Ottawa Ave NW, Ste 100, Grand Rapids, MI 49503",
        info: this.infoContent,
        position: new google.maps.LatLng(42.969416, -85.669508),
        E1:["Mozart & Haydn", "Fri April 3", "8PM"],
        Link1:"https://www.grsymphony.org/mozart-haydn",
        E2:["Mahler's Resurrection", "Fri May 15", "8PM"],
        Link2:"https://www.grsymphony.org/mahlers-resurrection",
        Site:"https://www.grsymphony.org/",
        options: {
          icon: starIcon + 'ylw-stars.png'
        } 
      },
      {
        Name: "Meijer Gardens",
        Address: "1000 E Beltline Ave NE, Grand Rapids, MI 49525",
        info: this.infoContent,
        position: new google.maps.LatLng(42.979845, -85.585671),
        E1:["Gregory Alan Isakov", "Sun June 7", "7PM"],
        Link1:"https://www.meijergardens.org/calendar/isakov20/",
        E2:["Tuesday Evening Music Club", "Tues July 7th", "7PM"],
        Link2:"https://www.meijergardens.org/calendar/tuesday-evening-music-club/",
        Site:"https://www.meijergardens.org/attractions/amphitheater-garden/",
        options: {
          icon: starIcon + 'ylw-stars.png'
        }
      }
    ];
  
  constructor() { }
 
//Function for compiling array for Gmap Component
  getVenue(): Venue[] {
    return this.venues;
  }

}
