import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homePage';
import Header from './components/header';
import Footer from './components/footer';
import './components/WeatherApp.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Switch>
          <Route path="/" exact component={HomePage} />
          {/* Add other routes here */}
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
