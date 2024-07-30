"use client";

import React from 'react';
import styles from './styles.css'; 

const Alerts = () => {
  return (
    <div className={styles.container}>
      <h1>Current Weather Alerts</h1>
      <ul>
        <li>
          <span className={styles.alertType}>Alert 1:</span> Severe Thunderstorm Warning
          <p className={styles.alertDescription}>Be prepared for intense thunderstorms that may cause severe weather conditions.</p>
        </li>
        <li>
          <span className={styles.alertType}>Alert 2:</span> Flood Advisory
          <p className={styles.alertDescription}>Minor flooding is possible; stay alert to changing conditions.</p>
        </li>
        {/* More alerts can be added dynamically */}
      </ul>
    </div>
  );
};

export default Alerts;
