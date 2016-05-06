import React, { Component } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import objectAssign from 'object-assign';
import ChannelCard from 'components/ChannelCard';
import NavItem from 'components/NavItem';
import UserNavItem from 'components/UserNavItem';

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

class VerticalNav extends Component {
  constructor(props) {
    super(props);
  }
  renderUserComponent(user) {
    return (
      <UserNavItem
        user={user} />
    );
  }
  render() {
    const { user } = this.props;
    let component = null;
    if (user) {
      component = this.renderUserComponent();
    }
    return (
      <div className='vertical-nav' style={styles.verticalNav}>
        <div className='logo' style={styles.logo}>
          <img src={logoImg} style={styles.logoImg} />
        </div>
        <div className='nav-menu' style={styles.navMenu}>
          <ul className='nav-menu-list' style={styles.navList}>
            { component }
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