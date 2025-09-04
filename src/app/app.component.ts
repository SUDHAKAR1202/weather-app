import { Component, OnInit } from '@angular/core';
import { WeatherService} from './services/weather.service'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weatherapp';
 

  constructor(private weatherService:WeatherService) {}
 
  weatherData?: any;
  ngOnInit() {
         
   this.getWeather('Texas'); 
  }

    getWeather(city: string) {
    this.weatherService.getWeather(city).subscribe({
      next: (data) => {
        this.weatherData = data;
        console.log(this.weatherData); 
      },
      error: (err) => {
        console.error('Error fetching weather:', err);
      }
    });
  }
}
