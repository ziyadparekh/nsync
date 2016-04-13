import objectAssign from 'object-assign';
import copy from 'constants/copy';

const initialState = {
  user: false
};

export default function authed(state = initialState, action) {
  switch (action.type) {
    case copy.RECEIVE_AUTHED_USER:
    return objectAssign({}, state, {
      user: action.user
    });
    default:
    return state
  }
}