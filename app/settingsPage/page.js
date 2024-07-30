"use client"; 

import React, { useState } from 'react';
import './styles.css'; 


const Settings = () => {
  const [units, setUnits] = useState('metric');
  const [favoriteLocations, setFavoriteLocations] = useState([]);

  const handleUnitsChange = (e) => setUnits(e.target.value);
  const handleAddLocation = () => {
    const location = prompt('Enter a location:');
    if (location) {
      setFavoriteLocations([...favoriteLocations, location]);
    }
  };

  return (
    <div>
      <h1>Settings</h1>
      <div>
        <label>
          Units of Measurement:
          <select value={units} onChange={handleUnitsChange}>
            <option value="metric">Metric (Celsius)</option>
            <option value="imperial">Imperial (Fahrenheit)</option>
          </select>
        </label>
      </div>
      <div>
        <h2>Favorite Locations</h2>
        <ul>
          {favoriteLocations.map((location, index) => (
            <li key={index}>{location}</li>
          ))}
        </ul>
        <button onClick={handleAddLocation}>Add Location</button>
      </div>
    </div>
  );
};

export default Settings;
