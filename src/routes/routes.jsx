import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about.jsx';
import FicheLogement from '../pages/housing';
import Error from '../pages/error.jsx';

function RoutesPath() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Navigate replace to="/accueil" />} path="/" />
        <Route path="/accueil" element={<Home />} />
        <Route path="/logement/:id" element={<FicheLogement />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </HashRouter>
  );
}

export default RoutesPath;