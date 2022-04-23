import React from 'react';
import { getChannels } from '../../api/channels_api';
import { useNavigate } from 'react-router-dom';
import ChannelList from './ChannelList';
import { Container, Paper } from '@mui/material';

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
    <Paper>
      <Container>
        <div>
          <div>ChannelBrowser</div>
          <br />
          {!channels ? (
            <h1>No channels found</h1>
          ) : (
            <ChannelList channels={channels} />
          )}
        </div>
      </Container>
    </Paper>
  );
};

export default ChannelBrowser;

{
  /* https://mui.com/material-ui/react-pagination/ */
}
