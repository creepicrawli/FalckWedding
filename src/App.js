import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Support from './Support';
import Admin from './Admin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/support" element={<Support />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
