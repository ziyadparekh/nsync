import React, { Component } from 'react';

const NOT_FOUND_MESSAGE = `Sorry, the linked video was not found. 
                          Please try another one`;
const NO_DUPLICATE = `Sorry, you cannot add duplicate videos to the
                      playlist`;

class Autocomplete extends Component {

  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.fetchVideoMeta = this.fetchVideoMeta.bind(this);
    this.addNext = this.addNext.bind(this);
    this.addAtEnd = this.addAtEnd.bind(this);
    
    this.oembedUrl = 'http://open.iframe.ly/api/iframely?';
    this.state = {
      queryInProgress: false,
      url: '',
      info: {},
      embedData: {},
      status: {},
      playlist: [],
      currentlyPlaying: 0
    }
  }

  fetchVideoMeta() {
    if (!this.state.url || 
        !this.state.info)
      return;

    
    let qs = this.buildQueryString({
      url: encodeURIComponent(this.state.url),
      origin: 'ziyadparekh'
    });
    let url = `${this.oembedUrl}${qs}`;

    this.setState({'queryInProgress': true});
    fetch(url).then((response) => {
      if (!response.ok) {
        return Promise.reject(response.status);
      }
      this.setState({'queryInProgress': false});
      return response.json();
    }).then((json) => {
      console.log(json);
      this.setState({
        embedData: json,
        status: {}
      });
    }).catch((e) => {
      this.setState({
        'queryInProgress': false,
        'embedData': {},
        'status': {
          type: 'error',
          'message': NOT_FOUND_MESSAGE
        }
      });
    });
  }

  buildQueryString(params) {
    let str = '';
    for (var key in params) {
      str += key + '=' + params[key] + '&';
    }
    str = str.slice(0, str.length - 1); 
    return str;
  }
  
  extractQueryParam(query, param) {
    let params = {};
    query.split('&').map((kv) => {
      kv = kv.split('=');
      params[kv[0]] = kv[1];
    });
    return params[param];
  }

  parseMediaLinkUrl(url) {
    if(typeof url != "string") {
      return {
        id: null,
        type: null
      };
    }
    url = url.trim();
    url = url.replace("feature=player_embedded&", "");

    let m;
    if((m = url.match(/youtube\.com\/watch\?([^#]+)/))) {
      return {
        id: this.extractQueryParam(m[1], "v"),
        type: "yt"
      };
    }
    if((m = url.match(/youtu\.be\/([^\?&#]+)/))) {
      return {
        id: m[1],
        type: "yt"
      };
    }
    if((m = url.match(/vimeo\.com\/([^\?&#]+)/))) {
      return {
        id: m[1],
        type: "vi"
      };
    }
    if((m = url.match(/soundcloud\.com\/([^\?&#]+)/))) {
      return {
        id: url,
        type: "sc"
      };
    }
    // Generic for the rest.
    if ((m = url.match(/^([a-z]{2}):([^\?&#]+)/))) {
      return {
        id: m[2],
        type: m[1]
      };
    }

    return {
      id: null,
      type: null
    };
  }

  handleInputChange(e) {
    let url = e.target.value;
    let info = this.parseMediaLinkUrl(url);
    this.setState({
      url,
      info
    });
  }

  renderInput() {
    return (
      <input 
        className='search-input'
        type='text'
        placeholder='Paste media URL'
        onChange={this.handleInputChange}
      />
    );
  }
  getIcon(iconClass) {
    return (
      <i className={"fa search-icon " + iconClass+""} />
    );
  }
  youtubeIcon() {
    return this.getIcon('fa-youtube-square');
  }
  soundcloudIcon() {
    return this.getIcon('fa-soundcloud');
  }
  vimeoIcon() {
    return this.getIcon('fa-vimeo-square');
  }
  unknownIcon() {
    return this.getIcon('fa-exclamation');
  }
  loadingIcon() {
    return this.getIcon('fa-spinner');
  }
  getComponents() {
    switch(this.state.info.type) {
      case 'yt':
      return {
        icon: this.youtubeIcon(),
        text: 'YouTube',
        className: 'youtube'
      };
      case 'sc':
      return {
        icon: this.soundcloudIcon(),
        text: 'SoundCloud',
        className: 'soundcloud'
      };
      case 'vi':
      return {
        icon: this.vimeoIcon(),
        text: 'Vimeo',
        className: 'vimeo'
      };
      default: {
        return {
          icon: this.unknownIcon(),
          text: 'Unknown',
          className: 'default disabled'
        }
      }
    }
  }
  getLoadingComponents() {
    return {
      icon: this.loadingIcon(),
      text: 'Loading',
      className: 'deafult disabled'
    }
  }
  renderButton() {
    var components;
    if (this.state.queryInProgress) {
      components = this.getLoadingComponents();
    } else {
      components = this.getComponents();
    }
    return (
      <button
        className={'search-button ' + components.className}
        onClick={this.fetchVideoMeta}
        >
        {components.icon}
        <span className='button-text'>
          {components.text}
        </span>
      </button>
    );
  }
  renderNoteComponent(type) {
    let status = this.state.status;
    return (
      <div className={'note ' + type}>
        <span>{status.message}</span>
      </div>
    );
  }
  renderSuccessNote() {
    return this.renderNoteComponent('success');
  }
  renderErrorNote() {
    return this.renderNoteComponent('error');
  }
  renderInfoNote() {
    return this.renderNoteComponent('info');
  }
  renderNote() {
    let status = this.state.status;
    switch(status.type) {
      case 'error':
      return this.renderErrorNote();
      case 'info':
      return this.renderInfoNote();
      case 'success':
      return this.renderSuccessNote();
      default:
      return (<div></div>);
    }
  }
  addAtEnd(e) {
    let length = this.state.playlist.length;
    this.addToPosition(length);
  }
  addNext(e) {
    let currentlyPlaying = this.state.currentlyPlaying;
    this.addToPosition(currentlyPlaying + 1);
  }
  isItemInArray(array, key, item) {
    let truth = false;
    array.map((obj) => {
      if (obj[key] === item[key]) {
        truth = true;
      }
    });
    return truth;
  }
  addToPosition(pos) {
    let playlist = this.state.playlist;
    let item = this.formatEmbedData();

    if (this.isItemInArray(playlist, 'id', item)) {
      return this.setState({
        'status': {
          'type': 'info',
          'message': NO_DUPLICATE
        }
      });
    }

    playlist.splice(pos, 0, item);
    this.setState({
      playlist: playlist
    });
  }
  formatEmbedData() {
    let data = this.state.embedData;
    let info = this.state.info;
    return {
      id: info.id,
      url: data.url,
      src: data.links.thumbnail[0].href,
      title: data.meta.title,
      site: data.meta.site,
      desc: data.meta.desc,
      duration: data.meta.duration
    };
  }
  renderButtonToolbar() {
    return (
      <div className='toolbar-container'>
        <button
          className='left-button'
          onClick={this.addNext}>
          Add Next
        </button>
        <button
          className='right-button'
          onClick={this.addAtEnd}>
          Add To End
        </button>
      </div>
    );
  }
  renderEmbed() {
    if (Object.keys(this.state.embedData).length === 0) {
      return '';
    }
    const embedSrc = this.state.embedData.links.player[0].href;
    return (
      <div className='embed panel'>
        <div className='full-width'>
          <iframe 
          src={embedSrc} 
          frameborder="0" 
          allowfullscreen="true" 
          webkitallowfullscreen="true" 
          mozallowfullscreen="true"
          />
          <div className='full-width'>
            {this.renderButtonToolbar()}
          </div>
        </div>
      </div>
    );
  }
  renderEmptyPlaylist() {
    return (
      <div className='playlist panel'>
        <div className='full-width'>
          <span>Playlist is currently empty</span>
        </div>
      </div>
    );
  }
  renderPlaylist() {
    if (this.state.playlist.length === 0) {
      return this.renderEmptyPlaylist();
    }
    const playlist = this.state.playlist;
    return (
      <div className='playlist panel'>
        <div className='full-width'>
        {playlist.map((item, idx) => {
          return (
            <div key={idx} id={item.id} className='playlist-item'>
              <img src={item.src} className='item-img' />
              <div className='info'>
                <span className='title'>{item.title}</span>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className='holder'>
        <div className='panel'>
          {this.renderInput()}
          {this.renderButton()}
          {this.renderNote()}
        </div>
        {this.renderEmbed()}
        {this.renderPlaylist()}
      </div>
    );
  }
}

export default Autocomplete;