import objectAssign from 'object-assign';
import * as copy from 'constants/copy';

const initialState = {
  buttonState: 'default',
  channel: null
}

export function channel(state=initialState, action) {
  switch(action.type) {
    case copy.IS_LOADING:
    return objectAssign({}, state, {
      buttonState: copy.IS_LOADING
    });
    case copy.ON_CREATE_CHANNEL:
    return objectAssign({}, state, {
      buttonState: 'default',
      channel: action.channel
    });
    case copy.ON_SERVER_ERROR:
    return objectAssign({}, state, {
      buttonState: copy.IS_ERROR,
      channel: null
    });
    case copy.RESET_ERROR:
    return objectAssign({}, state, {
      buttonState: 'default'
    });
    default:
    return state;
  }
}