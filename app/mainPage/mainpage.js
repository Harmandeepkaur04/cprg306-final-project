"use client"; // Ensure this line is at the top

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
const CurrentWeatherPage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  // API key
  const apiKey = '1112a0ee0dbd41f585ad7e5fc8ae69b2'; 

  // Define parameters
  const city = 'Raleigh,NC'; // City name

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get('https://api.weatherbit.io/v2.0/current', {
          params: {
            key: apiKey,
            city: city,
            units: 'M', // Metric units (Celsius)
            include: 'minutely' // Optional: Include minutely forecast
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

  return (
    <div className="container">
      <h1 className="title">Current Weather Conditions</h1>
      {weatherData ? (
        <div className="info">
          <div className="info-item">
            <div className="weather-icon">🌤️</div>
            <h3>City</h3>
            <p>{weatherData.data[0].city_name}</p>
          </div>
          <div className="info-item">
            <h3>Observation Time</h3>
            <p>{weatherData.data[0].ob_time}</p>
          </div>
          <div className="info-item">
            <h3>Temperature</h3>
            <p>{weatherData.data[0].temp}°C</p>
          </div>
          <div className="info-item">
            <h3>Feels Like</h3>
            <p>{weatherData.data[0].app_temp}°C</p>
          </div>
          <div className="info-item">
            <h3>Humidity</h3>
            <p>{weatherData.data[0].rh}%</p>
          </div>
          <div className="info-item">
            <h3>Pressure</h3>
            <p>{weatherData.data[0].pres} mb</p>
          </div>
          <div className="info-item">
            <h3>Wind Speed</h3>
            <p>{weatherData.data[0].wind_spd} m/s</p>
          </div>
          <div className="info-item">
            <h3>Cloud Coverage</h3>
            <p>{weatherData.data[0].clouds}%</p>
          </div>
          <div className="info-item">
            <h3>Visibility</h3>
            <p>{weatherData.data[0].vis} km</p>
          </div>
          <div className="info-item">
            <h3>Weather Description</h3>
            <p>{weatherData.data[0].weather.description}</p>
          </div>
          <div className="info-item">
            <h3>UV Index</h3>
            <p>{weatherData.data[0].uv}</p>
          </div>
          <div className="info-item">
            <h3>Sunrise</h3>
            <p>{weatherData.data[0].sunrise}</p>
          </div>
          <div className="info-item">
            <h3>Sunset</h3>
            <p>{weatherData.data[0].sunset}</p>
          </div>
        </div>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
};

export default CurrentWeatherPage;
