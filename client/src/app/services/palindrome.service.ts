import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PalindromeService {

  apiURL: string = 'http://localhost:5050/palindrome';

  constructor(private httpClient: HttpClient) {}

  public getPalindromes(
    firstNumberInInterval:number = 0,
    lastNumberInInterval:number = 100 ){
      const urlWithParameters = `${this.apiURL}?first=${firstNumberInInterval}&last=${lastNumberInInterval}`;
      return this.httpClient.get<number[]>(urlWithParameters);
  }
}
