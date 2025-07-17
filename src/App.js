import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Support from './Support';
import Admin from './Admin';
import AppRedirect from './AppRedirect'; // ✅ Add this line

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/support" element={<Support />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/app" element={<AppRedirect />} />
    </Routes>
  );
}

export default App;
