import React from 'react';
import './styles.css'; 

function WeatherApp() {
  return (
    <div className="container">
      <aside className="sidebar">
        <div className="menu-item">Weather</div>
        <div className="menu-item">Cities</div>
        <div className="menu-item">Map</div>
        <div className="menu-item">Settings</div>
      </aside>
      <main className="main-content">
        <header className="header">
          <input type="text" className="search" placeholder="Search for cities" />
        </header>
        <section className="weather-info">
          <div className="current-weather">
            <h1>Madrid</h1>
            <p>Chance of rain: 0%</p>
            <h2>31°</h2>
            <div className="forecast">
              <div className="time">6:00 AM</div>
              <div className="temp">25°</div>
              <div className="time">9:00 AM</div>
              <div className="temp">28°</div>
              <div className="time">12:00 PM</div>
              <div className="temp">33°</div>
              <div className="time">3:00 PM</div>
              <div className="temp">34°</div>
              <div className="time">9:00 PM</div>
              <div className="temp">30°</div>
            </div>
          </div>
          <div className="additional-info">
            <div>Real Feel: 30°</div>
            <div>Wind: 0.2 km/h</div>
            <div>Chance of rain: 0%</div>
            <div>UV Index: 3</div>
          </div>
        </section>
        <section className="weekly-forecast">
          <div className="day">Today - Sunny - 36°/22°</div>
          <div className="day">Tue - Sunny - 37°/21°</div>
          <div className="day">Wed - Sunny - 37°/21°</div>
          <div className="day">Thu - Cloudy - 37°/21°</div>
          <div className="day">Fri - Cloudy - 37°/21°</div>
          <div className="day">Sat - Rainy - 37°/21°</div>
          <div className="day">Sun - Sunny - 37°/21°</div>
        </section>
      </main>
    </div>
  );
}

export default WeatherApp;



/**
 * <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <aside class="sidebar">
            <div class="menu-item">Weather</div>
            <div class="menu-item">Cities</div>
            <div class="menu-item">Map</div>
            <div class="menu-item">Settings</div>
        </aside>
        <main class="main-content">
            <header class="header">
                <input type="text" class="search" placeholder="Search for cities">
            </header>
            <section class="weather-info">
                <div class="current-weather">
                    <h1>Madrid</h1>
                    <p>Chance of rain: 0%</p>
                    <h2>31°</h2>
                    <div class="forecast">
                        <div class="time">6:00 AM</div>
                        <div class="temp">25°</div>
                        <div class="time">9:00 AM</div>
                        <div class="temp">28°</div>
                        <div class="time">12:00 PM</div>
                        <div class="temp">33°</div>
                        <div class="time">3:00 PM</div>
                        <div class="temp">34°</div>
                        <div class="time">9:00 PM</div>
                        <div class="temp">30°</div>
                    </div>
                </div>
                <div class="additional-info">
                    <div>Real Feel: 30°</div>
                    <div>Wind: 0.2 km/h</div>
                    <div>Chance of rain: 0%</div>
                    <div>UV Index: 3</div>
                </div>
            </section>
            <section class="weekly-forecast">
                <div class="day">Today - Sunny - 36°/22°</div>
                <div class="day">Tue - Sunny - 37°/21°</div>
                <div class="day">Wed - Sunny - 37°/21°</div>
                <div class="day">Thu - Cloudy - 37°/21°</div>
                <div class="day">Fri - Cloudy - 37°/21°</div>
                <div class="day">Sat - Rainy - 37°/21°</div>
                <div class="day">Sun - Sunny - 37°/21°</div>
            </section>
        </main>
    </div>
    <script src="script.js"></script>
</body>
</html>


use https://jsfiddle.net/ to look at the layout of the app
 */
