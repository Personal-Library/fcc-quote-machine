import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './Components/NavBar/App.jsx';
import Card from './Components/Hero/App.jsx';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Card />
  </React.StrictMode>,
  document.getElementById('root')
);

