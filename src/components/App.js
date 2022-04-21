import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import '../styles/output.css';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route
        path='/'
        element={<h1 className='text-3xl font-bold underline'>Hello world</h1>}
      />
      <Route path='/home' element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;
