import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
providedIn: 'root'
})

export class CountriesService {
    constructor(private http: HttpClient) {}
    public getCountries() {
        return this.http.get('https://opentable.herokuapp.com/api/countries');
    }
}
