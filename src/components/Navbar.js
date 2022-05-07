import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import FaceTwoToneIcon from '@mui/icons-material/FaceTwoTone';
import MenuIcon from '@mui/icons-material/Menu';
import { getUserProfile } from '../api/auth_api';

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from '@mui/material';

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    const getData = async () => {
      const userDb = await getUserProfile();
      if (userDb) {
        setUser(userDb);
      }
    };

    getData();
  }, []);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigateRegister = () => {
    handleUserNavigate('register');
  };

  const navigateLogin = () => {
    handleUserNavigate('login');
  };

  const navigateProfile = () => {
    handleUserNavigate('profile');
  };

  const handleUserNavigate = (setting) => {
    handleCloseUserMenu();
    window.location.assign(
      window.location.protocol + '//' + window.location.host + '/' + setting
    );
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    window.sessionStorage.removeItem('token');
    setUser();
    navigate('login', { replace: true });
  };

  const pages = [
    { title: 'Home', path: '' },
    { title: 'Channels', path: 'channelbrowser' },
    { title: 'About', path: 'about' },
  ];
  const settings = [
    {
      title: 'Profile',
      path: 'profile',
      func: navigateProfile,
      loggedIn: true,
    },
    { title: 'Logout', path: 'logout', func: handleLogout, loggedIn: true },
    {
      title: 'Register',
      path: 'register',
      func: navigateRegister,
      loggedIn: false,
    },
    {
      title: 'Login',
      path: 'login',
      func: navigateLogin,
      loggedIn: false,
    },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleNavigate = (page) => {
    handleCloseNavMenu();
    window.location.assign(
      window.location.protocol + '//' + window.location.host + '/' + page
    );
  };

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              typography: { fontStyle: 'italic' },
            }}
          >
            GameSpace
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.title}
                  onClick={() => {
                    handleNavigate(page.path);
                  }}
                >
                  <Typography textAlign='center'>{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              typography: { fontStyle: 'italic' },
            }}
          >
            GameSpace
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={() => {
                  handleNavigate(page.path);
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
                {user ? (
                  <Avatar alt='Profile Picture' src={user.image} />
                ) : (
                  <FaceTwoToneIcon />
                )}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {user &&
                settings
                  .filter((f) => f.loggedIn === true)
                  .map((setting) => (
                    <MenuItem
                      key={setting.title}
                      onClick={() => setting.func()}
                    >
                      <Typography textAlign='center'>
                        {setting.title}
                      </Typography>
                    </MenuItem>
                  ))}
              {!user &&
                settings
                  .filter((f) => f.loggedIn === false)
                  .map((setting) => (
                    <MenuItem
                      key={setting.title}
                      onClick={() => setting.func()}
                    >
                      <Typography textAlign='center'>
                        {setting.title}
                      </Typography>
                    </MenuItem>
                  ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
