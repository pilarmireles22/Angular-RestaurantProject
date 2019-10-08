import { Component, OnInit } from '@angular/core';
import { GeneralInformationService } from '../generalinformation.service';
import { CountriesService } from '../getCountries.service';
import { CitiesService } from '../getCities.service';
import { SearchService } from '../SearchService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  constructor(private generalinformation: GeneralInformationService, private countries: CountriesService, private cities: CitiesService) { }

  results = {};
  countriesResults = {};
  citiesResults = {};
  country = '';
  city = '';
  ngOnInit() {
    this.generalinformation.getGeneralInformation().subscribe((data: any) => {
      this.results = data;
      // console.log(data);
      });
    this.countries.getCountries().subscribe((data: any) => { this.countriesResults = data; });
    this.cities.getCities().subscribe((data: any) => { this.citiesResults = data; });

  }



}
