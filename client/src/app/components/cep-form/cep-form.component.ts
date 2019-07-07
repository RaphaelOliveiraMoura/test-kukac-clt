import { Component, OnInit } from '@angular/core';
import { CepService } from 'src/app/services/cep.service';
import AddressInterface from 'src/app/models/CepInformation';

@Component({
  selector: 'app-cep-form',
  templateUrl: './cep-form.component.html',
  styleUrls: ['./cep-form.component.css']
})
export class CepFormComponent implements OnInit {

  ceps: Array<string|number> = [];
  cepsInformations: Array<AddressInterface> = [];

  constructor(private cepService: CepService) { }

  ngOnInit() {
  }

  async getAllInfomationAboutCeps(){
    await this.ceps.map(async (cep, index)=>{
      await this.cepService.getAddressInformations(cep).subscribe((response)=>{ 
        this.cepsInformations[index] = response;
      });
    });
  }

}
