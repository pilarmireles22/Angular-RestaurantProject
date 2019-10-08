import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { Page404Component } from './page404/page404.component';
import { routing, appRoutingProviders } from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { GeneralInformationService } from './generalinformation.service';
import { CountriesService } from './getCountries.service';
import {CitiesService} from './getCities.service';
import { SearchService } from './SearchService';
import { DetailsRestaurantsComponent } from './details-restaurants/details-restaurants.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    Page404Component,
    DetailsRestaurantsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders, GeneralInformationService, CountriesService, CitiesService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
