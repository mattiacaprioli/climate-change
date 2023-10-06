// App.js
import React from 'react';

// import delle pagine
import Home from './pages/Home';
import Methane from './pages/Methane';
import Temperature from './pages/Temperature';
import CO2 from './pages/CO2';
import Glaciers from './pages/Glaciers';
import NO2 from './pages/NO2';

// import di react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/Methane" element={<Methane />} exact/>
        <Route path="/Temperature" element={<Temperature />} exact/>
        <Route path="/CO2" element={<CO2 />} exact/>
        <Route path="/Glaciers" element={<Glaciers />} exact/>
        <Route path="/NO2" element={<NO2 />} exact/>
      </Routes>
    </Router>
  );
};

export default App;