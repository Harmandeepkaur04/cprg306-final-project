import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homePage';
import Header from './components/header';
import Footer from './components/footer';
import './components/WeatherApp.css';
import Alerts from './alertsPage/page';
import Settings from './settingsPage/page';
import Feedback from './feedbackPage/page';
import '../styles/globals.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/alerts" component={Alerts} />
          <Route path="/settings" component={Settings} />
          <Route path="/feedback" component={Feedback} />
          {/* Add more routes here as needed */}
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
