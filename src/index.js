import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './App';

import ReactGA from 'react-ga4';
const TRACKING_ID = 'G-RQ7BPYS5F6';

ReactGA.initialize(TRACKING_ID);
ReactGA.send({ hitType: 'pageview', page: window.location.pathname });

ReactDOM.render(
  <React.StrictMode>
    <App />{' '}
  </React.StrictMode>,
  document.getElementById('root')
);
