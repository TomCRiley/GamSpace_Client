import axios from 'axios';

const baseurl = 'http://localhost:8000';

const getChannels = async () => {
  const options = {
    method: 'GET',
    url: `${baseurl}/channels/`,
  };

  const { data } = await axios.request(options);
  return data;
};

export default getChannels;
