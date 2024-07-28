import React, { useState } from 'react';

function LocationSearch({ onSearch }) {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    onSearch(location);
  };

  return (
    <div className="location-search">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default LocationSearch;
