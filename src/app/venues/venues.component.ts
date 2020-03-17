import { Component, OnInit } from '@angular/core';
import { VenuesService } from '../venues.service';
import { GoogleMap, MapInfoWindow, MapMarker } from "@angular/google-maps";



@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})
export class VenuesComponent implements OnInit {
  // venue : Venues[];
  constructor() { }

  ngOnInit(): void {
  }


  //venue open?
//   stuff = "<p>{this.venues}</p>";
//   venueContent = "<p>{this.venues}</p>";
//   open = false;

//   getStuff(marker: MapMarker, content) {
//   this.venueContent = content;
//   this.stuff.open(marker);
// }
}
