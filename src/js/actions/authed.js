import Parse from 'parse';
import * as copy from 'constants/copy';
import * as navigate from 'actions/navigate';

export function signupUser(username, password) {
  return dispatch => {
    let user = new Parse.User();
    user.set('username', username);
    user.set('password', password);

    dispatch(isLoading());
    return user.signUp().then(user => {
      return dispatch(authedUser(user));
    }, err => {
      dispatch(setReset());
      throw err;
    }).then(() => {
      return dispatch(navigate.routeTo('/'));
    }).catch((err) => {
      return dispatch(isError(err));
    });
  }
}

export function loginUser(username, password) {
  return dispatch => {
    let user = new Parse.User();
    user.set('username', username);
    user.set('password', password);

    dispatch(isLoading());
    return user.logIn().then(user => {
      return dispatch(authedUser(user));
    }, err => {
      dispatch(setReset());
      throw err;
    }).then(() => {
      return dispatch(navigate.routeTo('/'));
    }).catch((err) => {
      return dispatch(isError(err));
    });
  }
}

export function toggleStep(step) {
  return {
    type: copy.TOGGLE_STEP,
    authStep: step
  }
}

export function authorizeUser() {
  return dispatch => {
    let currentUser = Parse.User.current();
    if (currentUser) {
      return dispatch(authedUser(currentUser));
    }
    return dispatch(userNotFound());
  }
}

function setReset() {
  return dispatch => {
    return setTimeout(() => {
      dispatch(resetError());
    }, 2000);
  }
}

function userNotFound() {
  return {
    action: copy.USER_NOT_FOUND,
    authState: copy.UNAUTHORIZED
  }
}

function resetError() {
  return {
    type: copy.RESET_ERROR
  };
}

function isLoading() {
  return {
    type: copy.IS_LOADING
  }
}

function isError(err) {
  switch(err.code) {
    case 202:
    err = 'Username taken';
    break;
    case 101:
    err = 'Invalid credentials';
    break;
    default:
    err = 'Something went wrong.'; 
  }
  return {
    type: copy.IS_ERROR,
    isError: err
  }
}

function authedUser(user) {
  return {
    type: copy.RECEIVE_AUTHED_USER,
    authState: copy.AUTHORIZED,
    user
  };
}
