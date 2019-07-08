import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  apiURL: string = 'http://localhost:5050/vehicles';

  constructor(private httpClient: HttpClient) {}

  public getVehicles( ){
      return this.httpClient.get<number[]>(this.apiURL);
  }
}
