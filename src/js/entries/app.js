import CreateChannelContainer from 'containers/CreateChannelContainer';
import CreateChannelConfig from 'configs/CreateChannelConfig';
import ReactDOM from 'react-dom';
import React from 'react';

ReactDOM.render(
  <CreateChannelContainer config={CreateChannelConfig} />, 
  document.getElementById('root')
);
