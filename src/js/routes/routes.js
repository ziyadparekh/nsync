import React from 'react';
import { Route, IndexRoute } from 'react-router';

import CreateChannelContainer from 'containers/CreateChannelContainer';
import Autocomplete from 'components/Autocomplete';
import AppContainer from 'containers/AppContainer';
import AuthContainer from 'containers/AuthContainer'; 

export default (
  <Route path='/' component={AppContainer}> 
    <Route path='/login' component={AuthContainer} />
    <Route path='/create-channel' component={CreateChannelContainer} />
  </Route>  
);

// <Route path='/create-channel' component={CreateChannelContainer} />
// <Route path='/create-channel' component={CreateChannelContainer} />
// <Route path="/" config={CreateChannelConfig} component={CreateChannelContainer}>
//   <IndexRoute component={Autocomplete} />
//   <Route path="about" component={App} />
// </Route>