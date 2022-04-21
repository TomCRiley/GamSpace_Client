import React from 'react';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../api/auth.js';

const Login = () => {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });

  const [required, updateRequired] = React.useState({
    email: '*',
    password: '*',
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    updateRequired({ ...required, [name]: '' });
  };

  return (
    <div>
      <div>Login</div>
    </div>
  );
};

export default Login;
