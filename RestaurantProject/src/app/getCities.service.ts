import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
providedIn: 'root'
})

export class CitiesService {
    constructor( private http: HttpClient) {}
    public getCities() {
        return this.http.get('https://opentable.herokuapp.com/api/cities');
    }
}
