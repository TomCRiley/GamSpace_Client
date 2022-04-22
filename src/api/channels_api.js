import axios from 'axios';

const baseurl = 'http://localhost:8000';

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
  // map this function to a button to create a new channel?
  const { data } = await axios.request(options);

  return data;
};

export const allChannelPosts = async (channelid) => {
  const options = {
    method: 'GET',
    url: `${base}/channel/posts/?channel=${channelid}`,
  };

  const { data } = await axios.request(options);
};

export const getChannel = async (channelid) => {
  const options = {
    method: 'GET',
    url: `${baseurl}/channel/${channelid}`,
  };

  const { data } = await axios.request(options);
};

export const getChannelByName = async (urlName) => {
  const options = {
    method: 'GET',
    url: `${baseurl}/channel/${urlName}`,
  };

  const { data } = await axios.request(options);
};
