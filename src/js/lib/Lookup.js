'use strict';

const Providers = {
  youtube: require('lib/providers/youtube')
}

export default (info) => {
  if (!info) {
    return Promise.reject(new Error('No information provided'))
  }

  if (!Providers[info.type]) {
    return Promise.reject(new Error('Unknown provider ' + info.type))
  }

  let provider = Providers[info.type]
  switch info.kind {
    case 'single':
    return provider.lookup(info.id)
    case 'playlist':
    if (provider.hasOwnProperty('lookupPlaylist')) {
      return provider.lookupPlaylist(info.id)
    }
    return Promise.reject(new Error(
      'Provider ' + info.type + ' does not support playlists'))
    default:
    return Promise.reject(new Error('Unknown info kind ' + info.kind))
  }
}