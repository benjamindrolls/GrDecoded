import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { IParking } from './iparking';

@Injectable({
  providedIn: 'root'
})
export class ParkingAPIService {

  private baseFilterUrl: string = "http://grand-rapids-proxy.herokuapp.com/proxy/resource/ykbs-97kp.json";

  constructor(private http: HttpClient) { }

  // getFilteredData(category: IParking) {
  //   return this.http.get(
  //     `${this.baseFilterUrl}&category=${category.category}&difficulty=${category.difficulty}&type=multiple`
  //   );
  // }

}