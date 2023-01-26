import { Route, HashRouter, Routes } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './resources/styles/index.css';
import App from './components/App/App';
import Resume from './components/Resume/Resume';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route exact path="/resume" element={ <Resume /> } />
        <Route exact path="/" element={ <App /> } />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
