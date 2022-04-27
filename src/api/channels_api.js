import axios from 'axios';

const baseurl = 'http://localhost:8000';
// const baseurl = 'https://gamrapi.herokuapp.com';

export const getChannels = async (getChannels) => {
  const options = {
    method: 'GET',
    url: `${baseurl}/channels/`,
    data: getChannels,
  };

  const { data } = await axios.request(options);
  return data;
};

export const createChannel = async (newChannel) => {
  const options = {
    method: 'POST',
    url: `${baseurl}/channels/`,
    data: newChannel,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };
  const { data } = await axios.request(options);

  return data;
};

export const allChannelPosts = async (channelId) => {
  const options = {
    method: 'GET',
    url: `${baseurl}/channel/${channelId}/posts`,
  };

  const { data } = await axios.request(options);
  return data;
};

export const getChannel = async (channelId) => {
  const options = {
    method: 'GET',
    url: `${baseurl}/channel/${channelId}`,
  };

  const { data } = await axios.request(options);
  return data;
};

export const getUserChannels = async (channelId) => {
  const options = {
    method: 'GET',
    url: `${baseurl}/channel/${channelId}`,
  };

  const { data } = await axios.request(options);
  return data;
};

export const getChannelByName = async (urlName) => {
  const options = {
    method: 'GET',
    url: `${baseurl}/channel/${urlName}`,
  };

  const { data } = await axios.request(options);
  return data;
};
