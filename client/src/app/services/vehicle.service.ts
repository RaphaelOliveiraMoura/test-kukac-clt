import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Vehicle, { Motorcycle, Passeio } from '../models/Vehicles';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  apiURL: string = 'http://localhost:5050/vehicles';

  constructor(private httpClient: HttpClient) {}

  public getVehicles( ){
      return this.httpClient.get<Vehicle[]>(this.apiURL);
  }

  public createMotorcycle( motorcycle: Motorcycle ){
    const url = this.apiURL + '/moto';
    return this.httpClient.post<Motorcycle>(url, motorcycle);
  }

  public createPasseio( passeio: Passeio ){
    const url = this.apiURL + '/passeio';
    return this.httpClient.post<Motorcycle>(url, passeio);
  }
}
