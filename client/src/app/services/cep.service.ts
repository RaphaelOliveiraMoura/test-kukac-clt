import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import AddressInterface from '../models/CepInformation';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  apiURL: string = 'http://localhost:5050/cep';

  constructor(private httpClient: HttpClient) {}

  public getAddressInformations( cep: string|number ){
      const urlWithParameters = `${this.apiURL}/${cep}`
      return this.httpClient.get<AddressInterface>(urlWithParameters);
  }
}
