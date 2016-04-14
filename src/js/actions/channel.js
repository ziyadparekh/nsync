import Parse from 'parse';
import * as copy from 'constants/copy';
import * as navigate from 'actions/navigate';

export function createChannel(channelName) {
  return dispatch => {
    let Channel = Parse.Object.extend("Channel");
    let channel = new Channel();

    channel.set('channel_name', channelName);
    dispatch(startLoader());
    return channel.save().then(channel => {
      return dispatch(onCreateChannel(channel));
    }, err => {
      dispatch(setReset());
      throw err;
    }).catch(err => {
      return dispatch(onServerError());
    });
  } 
}

function setReset() {
  return dispatch => {
    return setTimeout(() => {
      dispatch(resetError());
    }, 2000);
  }
}

function resetError() {
  return {
    type: copy.RESET_ERROR
  };
}

function onCreateChannel(channel) {
  return {
    type: copy.ON_CREATE_CHANNEL,
    channel
  }
}

function onServerError() {
  return {
    type: copy.ON_SERVER_ERROR
  }
}

function startLoader() {
  return {
    type: copy.IS_LOADING
  }
}