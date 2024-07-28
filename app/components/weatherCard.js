import React from 'react';

function WeatherCard({ data }) {
  return (
    <div className="weather-card">
      <h2>{data.location.name}</h2>
      <h3>{data.current.condition.text}</h3>
      <img src={data.current.condition.icon} alt="weather icon" />
      <p>Temperature: {data.current.temp_c}°C</p>
    </div>
  );
}

export default WeatherCard;
