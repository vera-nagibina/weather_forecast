import { Component, Input, OnInit } from '@angular/core';
import { WeatherServiceService } from '../weather-service.service';
import { Observable } from 'rxjs';
import { City } from '../models/city.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss']
})
export class WeatherPageComponent implements OnInit {

  weather$: Observable<any> | undefined;
  
  url: string = '';
  apiKey: string = environment.apiKeyWeather; 
  
  constructor(private weatherServiceService: WeatherServiceService) { }

  ngOnInit(): void {    
    this.weather$ = this.weatherServiceService.getWeather(`https://api.openweathermap.org/data/2.5/onecall?lat=55.7522&lon=37.6156&exclude=minutely&appid=${this.apiKey}&lang=ru&units=metric`);
  }  
  
  getCity(city: City){
    this.url = `https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&exclude=minutely&appid=${this.apiKey}&lang=ru&units=metric`
    this.weather$ = this.weatherServiceService.getWeather(this.url);
  }

  getDirection(wind_deg: string) {
    return `rotate(${wind_deg}deg)`

  }

}
