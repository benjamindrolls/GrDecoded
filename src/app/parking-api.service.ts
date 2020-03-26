import { Injectable, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { MapInfoWindow } from "@angular/google-maps";
import { IParking } from './iparking';

@Injectable({
  providedIn: 'root'
})
export class ParkingAPIService {

  private baseFilterUrl: string = "https://grand-rapids-proxy.herokuapp.com/proxy/resource/nb67-knvp.json?parker_type=Total&$select=lot_name,count";

  constructor(private http: HttpClient) { }

  getFilteredData(category: IParking) {
    return this.http.get(
      `${this.baseFilterUrl}`
    );
  }

}