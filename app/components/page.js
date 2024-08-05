import Link from 'next/link';
import './styles.css';

const Navbar = () => {
  const linkStyles = "underline text-cyan-600 hover:text-cyan-300";
  const logoSrc = "/logo.png"; // Path to your logo image

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logoSrc} alt="Logo" className="logo" />
        <span className="app-name">Horizon Weather App</span>
      </div>
      <ul>
        <li><Link className={linkStyles} href="/">Home</Link></li>
        <li><Link className={linkStyles} href="/alertsPage/">Alerts</Link></li>
        <li><Link className={linkStyles} href="/settingsPage/">Settings</Link></li>
        <li><Link className={linkStyles} href="/feedbackPage/">Feedback</Link></li>
        <li><Link className={linkStyles} href="/forecastPage/">7 Day Forecast</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
