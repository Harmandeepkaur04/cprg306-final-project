import React, { useState } from 'react';

function SettingsForm({ onSave }) {
  const [settings, setSettings] = useState({
    units: 'metric',
    language: 'en',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(settings);
  };

  return (
    <form className="settings-form" onSubmit={handleSubmit}>
      <label>
        Units:
        <select name="units" value={settings.units} onChange={handleChange}>
          <option value="metric">Metric</option>
          <option value="imperial">Imperial</option>
        </select>
      </label>
      <label>
        Language:
        <select name="language" value={settings.language} onChange={handleChange}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
        </select>
      </label>
      <button type="submit">Save</button>
    </form>
  );
}

export default SettingsForm;
