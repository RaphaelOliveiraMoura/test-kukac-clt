import { Component, OnInit } from '@angular/core';
import MoneyInterface from 'src/app/models/Money';
import { MoneyService } from 'src/app/services/money.service';

import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent implements OnInit {

  moneyResult: MoneyInterface;
  totalValue: number = 55;
  paidValue: number = 122;

  constructor(private moneyService: MoneyService) { }

  ngOnInit() {
  }

  makePurshace(){
    this.moneyService.calculatePurshace(this.totalValue, this.paidValue).subscribe((response)=>{ 
      this.moneyResult = response;
    }, (error)=>{
      this.moneyResult = null;
      M.toast({html: "Erro ao calcular compra"});
    });
  }

}
