import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import './assets/scss/style.scss';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import DetailPage from './pages/DetailPage/DetailPage';
import CheckOut from './pages/CheckOut/CheckOut';

function App() {
  return (
    <Router>
      <Fragment>
      <Router>
        <Route path="/" exact component={LandingPage} />
        <Route path="/properties/:id" component={DetailPage} />
        <Route path="/checkout" component={CheckOut} />
      </Router>

      <ToastContainer></ToastContainer>
      </Fragment>
    </Router>
  );
}

export default App;
