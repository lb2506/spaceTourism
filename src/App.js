import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';

import Home from './pages/home/home'
import Destinations from './pages/destinations/destinations'
import Crew from './pages/crew/crew'
import Technology from './pages/technology/technology'
import Navbar from './components/navbar/navbar'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact="true" path="/spaceTourism/" element={<Home />} />
          <Route exact="true" path="/spaceTourism/destinations" element={<Destinations />} />
          <Route exact="true" path="/spaceTourism/crew" element={<Crew />} />
          <Route exact="true" path="/spaceTourism/technology" element={<Technology />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
