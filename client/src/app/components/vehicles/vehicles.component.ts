import { Component, OnInit } from '@angular/core';
import Vehicle, { Passeio, Motorcycle } from 'src/app/models/Vehicles';
import { VehicleService } from 'src/app/services/vehicle.service';

import { toast } from 'angular2-materialize';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicles: Array<Vehicle> = [];
  vehicleTypeForm: number = 0;

  vehicle: any = {
    brand: '',
    model: '',
    yearOfManufacture: 0,
    passagers: 0
  }

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.vehicleService.getVehicles().subscribe((response)=>{ 
      this.vehicles = response;
    });
  }

  createMotorcycle(){
    const { brand, model, yearOfManufacture, passagers} = this.vehicle;
    this.vehicleService.createMotorcycle({
      type: 'motorcycle',
      brand,
      model,
      passagers,
      yearOfManufacture
    }).subscribe((response)=>{
      toast("Veículo cadastrado com sucesso", 4000);
    },(error)=>{
      toast("Erro cadastrar veículo", 4000);
    });
  }

  createPasseio(){
    const { brand, model, yearOfManufacture } = this.vehicle;
    this.vehicleService.createPasseio({
      type: 'passeio',
      brand,
      model,
      yearOfManufacture
    }).subscribe((response)=>{
      toast("Veículo cadastrado com sucesso", 4000);
    },(error)=>{
      toast("Erro cadastrar veículo", 4000);
    });
  }

  createVehicle(){
    if(this.vehicleTypeForm == 1){
      this.createPasseio();
    }else if(this.vehicleTypeForm == 2){
      this.createMotorcycle();
    }
  }
}
