import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../styles/output.css';

import Navbar from './Navbar';
import Home from './Home';
import ChannelBrowser from '../components/channels/ChannelBrowser';
import Channel from '../components/channels/Channel';
import Login from '../components/user/Login';
import Register from '../components/user/Register';
import UserProfile from '../components/user/UserProfile';
import Footer from './Footer';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/channelbrowser' element={<ChannelBrowser />} />
      <Route path='/channel' element={<Channel />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/profile' element={<UserProfile />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
