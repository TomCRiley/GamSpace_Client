import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../styles/output.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<h1 className="text-3xl font-bold underline">Hello world</h1>}
      />
    </Routes>
  </BrowserRouter>
);

export default App;
