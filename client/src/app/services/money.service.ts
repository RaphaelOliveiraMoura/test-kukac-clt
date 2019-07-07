import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import MoneyInterface from '../models/Money';

@Injectable({
  providedIn: 'root'
})
export class MoneyService {

  apiURL: string = 'http://localhost:5050/money';

  constructor(private httpClient: HttpClient) {}

  public calculatePurshace(
    totalValue:number = 0,
    paidValue:number = 100 ){

      return this.httpClient.post<MoneyInterface>(this.apiURL, {
        'total': totalValue,
        'paid': paidValue
      });
  }
}
