import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about.jsx';
import FicheLogement from '../pages/house';
import Error from '../pages/error';

function RoutesPath() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="logement/:id" element={<FicheLogement />} />
        <Route path="a-propos" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </HashRouter>
  );
}

export default RoutesPath;