import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CepFormComponent } from './components/cep-form/cep-form.component';
import { PalindromesComponent } from './components/palindromes/palindromes.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { MoneyComponent } from './components/money/money.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CepFormComponent,
    PalindromesComponent,
    VehiclesComponent,
    MoneyComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
