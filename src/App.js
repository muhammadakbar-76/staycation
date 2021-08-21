import React, { Fragment } from 'react';
import './assets/scss/style.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';


function App() {
  return (
    <Router>
      <Fragment>
      <Router>
        <Route path="/" exact component={LandingPage} />
      </Router>
      </Fragment>
    </Router>
  );
}

export default App;
