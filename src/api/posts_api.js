import axios from 'axios';

const baseurl = 'http://localhost:8000';
// const baseurl = 'https://gamrapi.herokuapp.com';

export const createPost = async (id, post) => {
  const options = {
    method: 'POST',
    url: `${baseurl}/posts/user/create/`,
    data: post,
    // headers: {
    //   authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    // },
  };
  const { data } = await axios.request(options);

  return data;
};

export const editPost = async (id) => {
  const options = {
    method: 'PUT',
    url: `${baseurl}/posts/user/update/`,
    // headers: {
    //   authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    // },
  };
  const { data } = await axios.request(options);

  return data;
};

export const deletePost = async (id) => {
  const options = {
    method: 'DELETE',
    url: `${baseurl}/posts/user/update/`,
    // headers: {
    //   authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    // },
  };
  const { data } = await axios.request(options);

  return data;
};
