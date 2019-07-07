import { Component, OnInit } from '@angular/core';
import { CepService } from 'src/app/services/cep.service';
import AddressInterface from 'src/app/models/CepInformation';

@Component({
  selector: 'app-cep-form',
  templateUrl: './cep-form.component.html',
  styleUrls: ['./cep-form.component.css']
})
export class CepFormComponent implements OnInit {

  formsAmmount: Array<number> = new Array(5).fill(0).map((item, index)=>index);
  ceps: Array<string|number> = [];
  cepsInformations: Array<AddressInterface> = [];

  constructor(private cepService: CepService) { }

  ngOnInit() {
  }

  async getAllInfomationAboutCeps(){
    for (let index = 0; index < this.ceps.length; index++) {
      await this.getAdressInformation(this.ceps[index]).then((response)=>{
        this.cepsInformations[index] = response;
      }).catch((error)=>{
        this.cepsInformations[index] = null;
      });
    }
  }

  async getAdressInformation(cep: number|string): Promise<AddressInterface>{
    return new Promise((resolve, reject)=>{
      this.cepService.getAddressInformations(cep).subscribe((response)=>{ 
        resolve(response);
      }, (error) => {
        reject(error);
      });
    });
  }

}
