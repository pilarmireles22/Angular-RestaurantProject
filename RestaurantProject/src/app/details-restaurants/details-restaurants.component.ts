import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { SearchService } from '../SearchService';
@Component({
  selector: 'app-details-restaurants',
  templateUrl: './details-restaurants.component.html',
  styleUrls: ['./details-restaurants.component.css']
})
export class DetailsRestaurantsComponent implements OnInit {
name = '';
img = '';
phone = '';
country = '';
state = '' ;
city = '';
AllResults = [];
  constructor( public activa: ActivatedRoute, public route: Router, private search: SearchService ) { }

  ngOnInit() {
    this.activa.queryParams.subscribe(data => {
      this.country = data.country;
      this.city = data.city;
      // tslint:disable-next-line: no-shadowed-variable
      this.search.getSearch(this.country, this.city).subscribe((data: any) => {this.AllResults = data.restaurants; });
    });
  }

}
