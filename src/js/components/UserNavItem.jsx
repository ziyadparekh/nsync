import React, { Component } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';

const propTypes = {

}

const styles = {

}

class UserNavItem extends Component {
  constructor(props) {
    super(props);
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
  render() {
    const { user } = this.props;
    return (
      <OverlayTrigger 
        trigger="click" //Change to hover after supressing React warnings
        placement="right" 
        rootClose >
        <li 
          style={styles.userNavItem}
          className={'user-nav-item'}
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover} >
          <img 
            src={user.profile_pic} 
            style={styles.imgStyle} />
        </li>
      </OverlayTrigger>
    )
  }
}

export default UserNavItem;