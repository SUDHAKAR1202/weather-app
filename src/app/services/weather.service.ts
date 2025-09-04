import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey ="9f7810b370a946e9a18141819231107";

  constructor(private http:HttpClient) { }

 getWeather(city: string) {
  
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${city}&days=1`;

  return this.http.get(url);
}


  
}
