import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; /* eslint-disable import/no-extraneous-dependencies */
import '@fortawesome/fontawesome-free/css/all.min.css'; /* eslint-disable import/no-extraneous-dependencies */
import 'bootstrap-css-only/css/bootstrap.min.css'; /* eslint-disable import/no-extraneous-dependencies */
import 'mdbreact/dist/css/mdb.css'; /* eslint-disable import/no-extraneous-dependencies */
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
