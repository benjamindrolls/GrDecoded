import { Component, OnInit, Inject, Output } from '@angular/core';
import { Venue } from '../venue';
import { VenuesService } from '../venues.service';
import { ParkingMarkersService } from "../parking-markers.service";
import { Parking } from "../parking";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventEmitter } from 'protractor';



@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.css']
})
export class DirectionsComponent implements OnInit {

  venues: Venue[];
  parking: Parking[];
  @Output() rPath = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<DirectionsComponent>, @Inject(MAT_DIALOG_DATA) public data: Parking,
    public vService: VenuesService, public pService: ParkingMarkersService) { }

  ngOnInit(): void {
    this.venues = this.vService.getVenue();
    this.parking = this.pService.getParking();

  }

}
