import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PalindromesComponent } from './components/palindromes/palindromes.component';
import { CepFormComponent } from './components/cep-form/cep-form.component';
import { MoneyService } from './services/money.service';
import { VehiclesComponent } from './components/vehicles/vehicles.component';

const routes: Routes = [
  { path: 'cep', component: CepFormComponent },
  { path: 'palindromes', component: PalindromesComponent },
  { path: 'money', component: MoneyService },
  { path: 'vehicle', component: VehiclesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
