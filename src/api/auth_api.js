import axios from 'axios';

const baseurl = 'https://gamrapi.herokuapp.com';

// export const register = async();
export const registerUser = async (user) => {
  const options = {
    method: 'POST',
    url: `${baseurl}/authentication/register/`,
    data: user,
  };
  const response = await axios.request(options);

  return response;
};

export const userLogin = async (credentials) => {
  const options = {
    method: 'POST',
    url: `${baseurl}/authentication/login/`,
    data: credentials,
  };

  const { data } = await axios.request(options);

  if (data.token) {
    window.sessionStorage.setItem('token', data.token);
  } else {
    window.sessionStorage.removeItem('token');
  }

  return data;
};

export const allUserPosts = async (userid) => {
  const options = {
    method: 'GET',
    url: `${baseurl}/posts/user/?${userid}`,
  };

  const { data } = await axios.request(options);
  return data;
};

export const getUserProfile = async () => {
  const options = {
    method: 'GET',
    url: `${baseurl}/authentication/credentials/`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };

  const { data } = await axios.request(options);
  return data;
};
