import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CarouselModule} from 'primeng/carousel';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ListboxModule} from 'primeng/listbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayPipe } from './pipes/day.pipe';
import { HourPipe } from './pipes/hour.pipe';
import { TempPipe } from './pipes/temp.pipe';
import { WeatherPageComponent } from './weather-page/weather-page.component';
import { CityComponent } from './city/city.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherPageComponent,
    HourPipe,
    TempPipe,
    DayPipe,
    CityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    FormsModule,
    InputTextModule,
    ListboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
