import React from 'react';
import { getChannels } from '../api/channels.js';
import { useNavigate } from 'react-router-dom';

const ChannelBrowser = () => {
  const [channels, setChannels] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      const channels = await getChannels();
      setChannels(channels);
    };

    getData();
  }, []);

  return (
    <div>
      <div>ChannelBrowser</div>
      <br />
      <h1>channel names</h1>
      {!channels ? (
        <h1>No channels found</h1>
      ) : (
        <div>
          {channels.map((channel) => (
            <div key={channel.id}>{channel.name}</div>
          ))}
        </div>
      )}
      <br />
      <h1>Channel Image & description</h1>
      <div>
        {!channels ? (
          <h1>No channels found</h1>
        ) : (
          <div>
            {channels.map((channel) => (
              <div key={channel.id}>
                {channel.image} <br />
                {channel.description}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChannelBrowser;

{
  /* https://mui.com/material-ui/react-pagination/ */
}
