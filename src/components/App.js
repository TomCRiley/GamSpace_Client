import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../styles/output.css';

import Navbar from './Navbar';
import Home from './Home';
import ChannelBrowser from './ChannelBrowser';
import Channel from './Channel';
import Login from './Login';
import UserProfile from './UserProfile';
import Footer from './Footer';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/channelbrowser' element={<ChannelBrowser />} />
      <Route path='/channel' element={<Channel />} />
      <Route path='/login' element={<Login />} />
      <Route path='/profile' element={<UserProfile />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
