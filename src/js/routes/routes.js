import React from 'react';
import { Route, IndexRoute } from 'react-router';

import CreateChannelContainer from 'containers/CreateChannelContainer';
import CreateChannelConfig from 'configs/CreateChannelConfig';

export default (
  <Route path="/" config={CreateChannelConfig} component={CreateChannelContainer}>
    
  </Route>
);