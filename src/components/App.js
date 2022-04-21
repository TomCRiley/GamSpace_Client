import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../styles/output.css';

import Navbar from './Navbar';
import Home from './Home';
import ChannelBrowser from './ChannelBrowser';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/ChannelBrowser' element={<ChannelBrowser />} />
    </Routes>
  </BrowserRouter>
);

export default App;
