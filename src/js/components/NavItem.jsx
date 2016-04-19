import React, { Component } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import ChannelCard from 'components/ChannelCard';

const showImg = 'https://upload.wikimedia.org/wikipedia/en/d/d9/The_Apprentice_Logo.png';

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

export default NavItem;