"use client"; // Ensure this line is at the top


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styless.css';

const ForecastPage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  // API key
  const apiKey = '1112a0ee0dbd41f585ad7e5fc8ae69b2'; 

  // Define parameters
  const city = 'Raleigh,NC'; // City name

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get('https://api.weatherbit.io/v2.0/forecast/daily', {
          params: {
            key: apiKey,
            city: city,
            units: 'M', // Metric units (Celsius)
          }
        });
        setWeatherData(response.data);
      } catch (err) {
        setError(err.response ? err.response.data.error : err.message);
      }
    };

    fetchWeatherData();
  }, [apiKey, city]);

  if (error) return <div className="error">Error: {error}</div>;

  const createSidebar = () => {
    return (
      <aside className="sidebar">
        {['Weather', 'Cities', 'Map', 'Settings'].map(item => (
          <div className="menu-item" key={item}>{item}</div>
        ))}
      </aside>
    );
  };

  const createHeader = () => {
    return (
      <header className="header">
        <input type="text" className="search" placeholder="Search for cities" />
      </header>
    );
  };

  const createCurrentWeather = () => {
    const current = weatherData.data[0];
    return (
      <div className="current-weather">
        <h1>{weatherData.city_name}</h1>
        <p>Chance of rain: {current.pop}%</p>
        <h2>{current.temp}°C</h2>
        <div className="forecast">
          {weatherData.data.slice(0, 5).map((hour, index) => (
            <div key={index} className="time-temp">
              <div className="time">{new Date(hour.ts * 1000).toLocaleTimeString()}</div>
              <div className="temp">{hour.temp}°C</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const createWeeklyForecast = () => {
    return (
      <div className="weekly-forecast">
        {weatherData.data.slice(0, 7).map((day, index) => (
          <div className="day" key={index}>
            <div className="day-name">{new Date(day.ts * 1000).toLocaleDateString()}</div>
            <div className="weather-icon">{day.weather.description}</div>
            <div className="temp-range">{day.temp.max}°/{day.temp.min}°</div>
          </div>
        ))}
      </div>
    );
  };

  const createAdditionalInfo = () => {
    const current = weatherData.data[0];
    return (
      <div className="additional-info">
        <div className="info-item">Real Feel: {current.app_temp}°C</div>
        <div className="info-item">Wind: {current.wind_spd} m/s</div>
        <div className="info-item">Chance of rain: {current.pop}%</div>
        <div className="info-item">UV Index: {current.uv}</div>
        <div className="info-item">Humidity: {current.rh}%</div>
        <div className="info-item">Pressure: {current.pres} mb</div>
        <div className="info-item">Cloud Coverage: {current.clouds}%</div>
        <div className="info-item">Visibility: {current.vis} km</div>
      </div>
    );
  };

  return (
    <div className="container">
      {createSidebar()}
      <div className="main-content">
        {createHeader()}
        <div className="weather-info">
          {weatherData ? createCurrentWeather() : <p className="loading">Loading...</p>}
          {weatherData ? createWeeklyForecast() : <p className="loading">Loading...</p>}
        </div>
        {weatherData ? createAdditionalInfo() : <p className="loading">Loading...</p>}
      </div>
    </div>
  );
};

export default ForecastPage;
