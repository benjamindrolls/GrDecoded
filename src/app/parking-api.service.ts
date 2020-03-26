import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { IParking } from './iparking';

@Injectable({
  providedIn: 'root'
})
export class ParkingAPIService {

  private baseFilterUrl: string = "https://grand-rapids-proxy.herokuapp.com/proxy/resource/nb67-knvp.json";

  constructor(private http: HttpClient) { }

  getFilteredData(category: IParking) {
    return this.http.get(
      `${this.baseFilterUrl}&category=${category.lot_name}&difficulty=${category.count}&type=multiple`
    );
  }

}