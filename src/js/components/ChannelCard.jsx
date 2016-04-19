import React, { Component } from 'react';
import objectAssign from 'object-assign';

const showStyles = {
  showInfo: {
    width: '100%',
    position: 'relative',
    float: 'left',
    padding: '10px'
  },
  showImg: {
    borderRadius: '4px',
    width: '100%',
    height: 'auto',
    position: 'relative',
    float: 'left'
  },
  showMeta: {
    width: '100%',
    position: 'relative',
    float: 'left',
    padding: '5px 0px',
    marginTop: '8px'
  },
  showTitle: {
    textAlign: 'center',
    fontSize: '17px',
    position: 'relative',
    width: '100%',
    float: 'left'
  },
  showMetaProgress: {
    height: '3px',
    borderRadius: '20px',
    position: 'absolute',
    bottom: '0',
    left: '0',
    zIndex: '2',
    backgroundColor: '#76ff03'
  },
  showUser: {
    fontFamily: 'VarelaRound',
    fontSize: '14px',
    color: '#78909c',
    textAlign: 'center',
    width: '100%',
    float: 'left'
  }
}

const nav = {
  button: {
    color: '#ffffff',
    fontFamily: 'League Spartan',
    fontSize: '14px',
    width: '60%',
    maxWidth: '100px',
    minWidth: '60px',
    borderRadius: '20px',
    backgroundColor: '#76ff03',
    padding: '7px 6px 5px 6px',
    textAlign: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
    display: 'block',
    margin: '0 auto'
  }
}

class ChannelCard extends Component {
  constructor(props) {
    super(props);

    this.imgSrc = props.imgSrc;
    this.title = props.title;
    this.duration = props.duration;
    this.completed = props.completed;
    this.queuedBy = props.queuedBy;
    this.activeConnections = props.activeConnections;
    this.theme = props.theme;
  }
  renderProgress(progress) {
    const style = objectAssign({}, showStyles.showMetaProgress, {
      width: progress + '%',
      backgroundColor: this.theme
    });
    return (
      <span className='meter' style={style}></span>
    );
  }
  render() {
    const imgSrc = this.imgSrc;
    const title = this.title;
    const progress = Math.round((this.completed/this.duration) * 100);
    const queuedBy = this.queuedBy;
    const connections = this.activeConnections;
    const buttonStyle = objectAssign({}, nav.button, {
      backgroundColor: this.theme
    });
    return (
      <div className='show-info mini' style={showStyles.showInfo}>
        <img src={imgSrc} style={showStyles.showImg} />
        <div className='show-info-meta mini' style={showStyles.showMeta}>
          <span className='show-title' style={showStyles.showTitle}>
            {title}
          </span>
          {this.renderProgress(progress)}
        </div>
        <div className='show-sub-info mini' style={showStyles.showMeta}>
          <span className='show-user' style={showStyles.showUser}>
            queued by @{queuedBy}
          </span>
          <span className='show-connections' style={showStyles.showUser}>
            {connections} connections
          </span>
        </div>
        <div className='navigate-button mini' style={showStyles.showMeta}>
          <a className='nav-button' style={buttonStyle}>Watch</a>
        </div>
      </div>
    );
  }
}

export default ChannelCard;