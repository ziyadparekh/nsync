import { combineReducers } from 'redux';
import authed from 'reducers/authed';
import { channel } from 'reducers/channel';

const rootReducer = combineReducers({
  authed,
  channel
});

export default rootReducer;