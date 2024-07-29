"use client"
import React, { useState, useEffect } from 'react';
import WeatherCard from '../components/weatherCard';
import AlertComponent from '../components/alertComponent';
import LocationSearch from '../components/locationSearch';
import { fetchWeatherData } from '../api';

function HomePage() {
  const [weatherData, setWeatherData] = useState(null);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWeatherData('London');
      setWeatherData(data);
      // Assuming alerts come from the weather API
      setAlerts(data.alerts || []);
    };

    fetchData();
  }, []);

  const handleSearch = async (location) => {
    const data = await fetchWeatherData(location);
    setWeatherData(data);
    setAlerts(data.alerts || []);
  };

  return (
    <div className="home-page">
      <LocationSearch onSearch={handleSearch} />
      {weatherData && <WeatherCard data={weatherData} />}
      {alerts.length > 0 && <AlertComponent alerts={alerts} />}
    </div>
  );
}

export default HomePage;
