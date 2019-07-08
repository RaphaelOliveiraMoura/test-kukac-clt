import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PalindromesComponent } from './components/palindromes/palindromes.component';
import { CepFormComponent } from './components/cep-form/cep-form.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { MoneyComponent } from './components/money/money.component';

const routes: Routes = [
  { path: '', component: CepFormComponent },
  { path: 'cep', component: CepFormComponent },
  { path: 'palindromes', component: PalindromesComponent },
  { path: 'money', component: MoneyComponent },
  { path: 'vehicles', component: VehiclesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
