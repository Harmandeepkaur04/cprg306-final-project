import React from 'react';

function AlertComponent({ alerts }) {
  return (
    <div className="alert-component">
      {alerts.map((alert, index) => (
        <div key={index} className="alert">
          <h4>{alert.title}</h4>
          <p>{alert.description}</p>
        </div>
      ))}
    </div>
  );
}

export default AlertComponent;
