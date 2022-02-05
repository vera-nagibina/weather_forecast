import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

    constructor(private http: HttpClient) { }

  getWeather(url: string) {
    return this.http.get(url);
  }
 
  
}
