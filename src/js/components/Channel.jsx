import React, { Component } from 'react';

const embedSrc = "https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Fusers%2F2247841&show_artwork=true";

class Channel extends Component {
  constructor(props) {
    super(props);
  }

  renderLeftMenu() {
    return (
      <div className='left-menu'>
        <ul>
          <li>Item1</li>
          <li>Item2</li>
          <li>Item3</li>
          <li>Item4</li>
        </ul>
      </div>
    );
  }

  renderPlayer() {
    return (
      <div className='player'>
        <div className='embed'>
          <iframe 
          src={embedSrc} 
          frameBorder="0" 
          allowFullScreen="true" 
          webkitAllowFullscreen="true" 
          mozAllowFullscreen="true"
          />
        </div>
        <div className='playlist'>
          <div className='item'>
            AAAAAAA
          </div>
        </div>
      </div>
    );
  }

  renderRightMenu() {
    return (
      <div className='right-menu'>
        <ul>
          <li>Item1</li>
          <li>Item2</li>
          <li>Item3</li>
          <li>Item4</li>
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className='container'>
        {this.renderLeftMenu()}
        {this.renderPlayer()}
        {this.renderRightMenu()}
      </div>
    );
  }
}

export default Channel

export default Channel;