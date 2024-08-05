import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import RootLayout from '../components/RootLayout';
import CurrentWeatherPage from '../components/CurrentWeatherPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
export default function HomePage() {
  return (
    <RootLayout>
      <CurrentWeatherPage />
    </RootLayout>
  );
}