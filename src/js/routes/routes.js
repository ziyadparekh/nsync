import React from 'react';
import { Route, IndexRoute } from 'react-router';

import CreateChannelContainer from 'containers/CreateChannelContainer';
import Autocomplete from 'components/Autocomplete';
import AppContainer from 'containers/AppContainer';
import CreateChannelConfig from 'configs/CreateChannelConfig';

export default (
  <Route path='/' component={AppContainer}>

  </Route>  
);

// <Route path="/" config={CreateChannelConfig} component={CreateChannelContainer}>
//   <IndexRoute component={Autocomplete} />
//   <Route path="about" component={App} />
// </Route>