import { Component, OnInit } from '@angular/core';
import { PalindromeService } from 'src/app/services/palindrome.service';

@Component({
  selector: 'app-palindromes',
  templateUrl: './palindromes.component.html',
  styleUrls: ['./palindromes.component.css']
})
export class PalindromesComponent implements OnInit {

  palindromes: Array<number>;
  firstValueInInterval: number = 0;
  lastValueInInterval: number = 100;
  
  constructor(private palindromeService: PalindromeService) { }

  ngOnInit() {
    
  }

  sendPalindromesRequest(){
    this.palindromeService.getPalindromes(this.firstValueInInterval, this.lastValueInInterval).subscribe((response)=>{ 
      this.palindromes = response;
    });
  }

}
