import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CityService } from '../city.service'
import { City } from '../models/city.model';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  city: string = '';
  cities: City [] = [];
  selectedCity: City = {
    name: ''
  };

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.city = 'г Москва'
    
  }

  inputCity() {
    this.cityService.getData(this.city).subscribe(data => this.cities = data);       
  }
  selectCity() {
    
    this.cities = [];
    this.onClick.emit(this.selectedCity);
    this.city = this.selectedCity.name;
  }
  @Output() onClick = new EventEmitter();

}
