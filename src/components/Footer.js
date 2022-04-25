import styled from 'styled-components';
import Layout, { Root, getFooter } from '@mui-treasury/layout';

const Footer = getFooter(styled);

const scheme = Layout();

const App = () => {
  return (
    <Root scheme={scheme}>
      <Footer>footer</Footer>
    </Root>
  );
};
