import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
providedIn: 'root'
})

export class GeneralInformationService {
    constructor(private http: HttpClient) {}
    public getGeneralInformation() {
        return this.http.get('https://opentable.herokuapp.com/api/stats');
    }
}
