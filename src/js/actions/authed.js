import Parse from 'parse';
import copy from 'constants/copy';
import * as navigate from 'actions/navigate';

export function signupUser(username, password) {
  return dispatch => {
    let user = new Parse.User();
    user.set('username', username);
    user.set('password', password);
    return user.signUp().then(user => {
      dispatch(navigate.routeTo('/'));
      dispatch(authedUser(user));
    }, err => { throw err; });
  }
}

function authedUser(user) {
  return {
    type: copy.RECEIVE_AUTHED_USER,
    user
  };
}
