import React, { Component } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import objectAssign from 'object-assign';

const styles = {
  verticalNav: {
    position: 'absolute',
    top: '0',
    width: '100px',
    minWidth: '100px',
    maxWidth: '100px',
    height: '100%',
    backgroundColor: '#ffffff',
    padding: '0px 5px',
    boxShadow: '0px 0px 15px 2px #f5f5f5, 0px 0px 0px 0px #DDDDDD',
    WebkitBoxShadow: '0px 0px 15px 2px #f5f5f5, 0px 0px 0px 0px #DDDDDD',
    MozBoxShadow: '0px 0px 15px 2px #f5f5f5, 0px 0px 0px 0px #DDDDDD'
  },
  logo: {
    marginTop: '20px',
    width: '100%',
    position: 'relative',
    float: 'left',
    border: '2px solid #e0e0e0',
    borderRadius: '60px',
    height: '88px',
    overflow: 'hidden'
  },
  logoImg: {
    width: '50px',
    height: 'auto',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  navMenu: {
    marginTop: '90px',
    width: '100%',
    position: 'relative',
    float: 'left'
  },
  navList: {
    listStyleType: 'none',
    width: '100%',
    padding: '0 5px'
  },
  navItem: {
    borderRadius: '60px',
    height: '80px',
    width: '80px',
    overflow: 'hidden',
    border: '2px solid #76ff03',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  itemImg: {
    width: '80px',
    height: '80px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
}

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

const hover = {
  navItem: objectAssign({}, styles.navItem, {
    boxShadow: '0px 0px 12px 0px #cfd8dc, 0px 0px 0px 0px #DDDDDD',
    cursor: 'pointer',
  }),
  logoImg: objectAssign({}, styles.logo, {
    boxShadow: '0px 0px 12px 0px #cfd8dc, 0px 0px 0px 0px #DDDDDD',
    cursor: 'pointer'
  })
}

const logoImg = 'https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png';
const moneyImg = 'http://www.marriagemattersjackson.com/Resources/Pictures/Bag%20of%20Money.png';
const showImg = 'https://upload.wikimedia.org/wikipedia/en/d/d9/The_Apprentice_Logo.png';

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

class NavItem extends Component {
  constructor(props) {
    super(props);
    // Props from parent
    this.className = props.className;
    this.hoverStyle = props.hoverStyle;
    this.style = props.style;
    this.imgSrc = props.imgSrc;
    this.imgStyle = props.imgStyle;
    // Interaction functions
    this.toggleHover = this.toggleHover.bind(this);
    // Set initial state
    this.state = {
      hover: false
    }
  }
  toggleHover() {
    this.setState({
      hover: !this.state.hover
    });
  }
  renderShowInfo() {
    return (
      <ChannelCard
        imgSrc={showImg}
        title='The Apprentice'
        duration={216000}
        completed={72000}
        queuedBy='ziyadparekh'
        activeConnections={123}
        theme='#76ff03' />
    );
  }
  renderPopover() {
    return (
      <Popover
        id='pop-id'>
        { this.renderShowInfo() }
      </Popover>
    );
  }
  render() {
    let hover = this.state.hover;
    let className = this.className;
    let style = hover ? this.hoverStyle : this.style;
    let imgSrc = this.imgSrc;
    let imgStyle = this.imgStyle;
    return (
      <OverlayTrigger 
        trigger="click" //Change to hover after supressing React warnings
        placement="right" 
        rootClose
        overlay={this.renderPopover()}>
        <li 
          style={style}
          className={className}
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover} >
          <img src={imgSrc} style={imgStyle} />
        </li>
      </OverlayTrigger>
    );
  }
}

class VerticalNav extends Component {
  render() {
    return (
      <div className='vertical-nav' style={styles.verticalNav}>
        <div className='logo' style={styles.logo}>
          <img src={logoImg} style={styles.logoImg} />
        </div>
        <div className='nav-menu' style={styles.navMenu}>
          <ul className='nav-menu-list' style={styles.navList}>
            <NavItem 
              className='nav-menu-item'
              style={styles.navItem}
              imgSrc={moneyImg}
              imgStyle={styles.itemImg}
              hoverStyle={hover.navItem}
            />
          </ul>
        </div>
      </div>
    );
  }
}

export default VerticalNav;