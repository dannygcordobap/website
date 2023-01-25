import { Route, BrowserRouter, Routes } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './resources/styles/index.css';
import App from './components/App/App';
import Resume from './components/Resume/Resume';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> } />
        <Route path="/resume" element={ <Resume /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
