// App.js
import React from 'react';

// import pages
import Home from './pages/Home';
import Methane from './pages/Methane'
import Temperature from './pages/Temperature';
import CO2 from './pages/CO2';
import Glaciers from './pages/Glaciers';
import NO2 from './pages/NO2';

// import react-router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/Methane' exact element={<Methane />} />
        <Route path='/Temperature' exact element={<Temperature />} />
        <Route path='/CO2' exact element={<CO2 />} />
        <Route path='/Glaciers' exact element={<Glaciers />} />
        <Route path='/NO2' exact element={<NO2 />} />
      </Routes>
    </Router>
  );
};

export default App;
