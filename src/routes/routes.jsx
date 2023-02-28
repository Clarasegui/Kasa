import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about.jsx';
import Accomodation from '../pages/accomodation';
import Error from '../pages/error';

function RoutesPath() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="logement/:id" element={<Accomodation />} />
        <Route path="a-propos" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesPath;