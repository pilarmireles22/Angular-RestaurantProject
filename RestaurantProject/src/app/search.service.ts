import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http';

@Injectable({
    providedIn: 'root'
})

export class SearchService {
    constructor(private http: HttpClient) { }
    public getSearch(country, city) {
        return this.http.get('https://opentable.herokuapp.com/api/restaurants?country=' + country + '&city=' + city);
    }
}
