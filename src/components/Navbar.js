import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const FirstButton = styled('button')({
  backgroundColor: 'aliceblue',
  color: 'darkslategrey',
  padding: 8,
  borderRadius: 7,
});

const Navbar = () => {
  return (
    <FirstButton>
      <Link to='/home'>Hello World</Link>
    </FirstButton>
  );
};

export default Navbar;
