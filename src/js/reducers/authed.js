import objectAssign from 'object-assign';
import * as copy from 'constants/copy';

const initialState = {
  user: false,
  authStep: copy.STEP_SIGNUP,
  buttonState: 'default',
  errMsg: '',
  authState: copy.UNAUTHORIZED,
  user: null
};

export default function authed(state = initialState, action) {
  switch (action.type) {
    case copy.RECEIVE_AUTHED_USER:
    return objectAssign({}, state, {
      user: action.user,
      authState: action.authState
    });
    case copy.IS_LOADING:
    return objectAssign({}, state, {
      buttonState: copy.IS_LOADING
    });
    case copy.IS_ERROR:
    return objectAssign({}, state, {
      buttonState: copy.IS_ERROR,
      errMsg: action.isError
    });
    case copy.RESET_ERROR:
    return objectAssign({}, state, {
      buttonState: 'default',
      errMsg: ''
    });
    case copy.TOGGLE_STEP:
    return objectAssign({}, state, {
      authStep: action.authStep
    });
    case copy.USER_NOT_FOUND:
    return objectAssign({}, state, {
      user: null,
      authState: copy.UNAUTHORIZED
    })
    default:
    return state
  }
}