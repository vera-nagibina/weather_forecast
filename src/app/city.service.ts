import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import{ City } from './models/city.model'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  apiKey: string = environment.apiKeyCity;
  url: string = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
  cities: any;
  

  getData(query:string){
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Token ' + this.apiKey,
      }),
      
    };
    return this.http.post(this.url, JSON.stringify({query: query}), httpOptions).pipe(map(response => this.deserialize(response)));
  }

  deserialize(data: any) {
    this.cities = data.suggestions.map((element: any) => {
      const city: City = {
        name: ''
      };
      city.name = element.value;
      city.lat = element.data.geo_lat;
      city.lon = element.data.geo_lon;
      
      return city;
    });

    return this.cities.filter(function(city: City) {
      return city.lat !== null && city.lon !== null;
    });
  }
}
