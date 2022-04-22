import axios from 'axios';

const baseurl = 'http://localhost:8000';

// export const register = async();
// no idea where to start with register

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
};
