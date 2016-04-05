import React, { Component } from 'react';
import VerticalNav from 'components/VerticalNav';

class AppContainer extends Component {
  render() {
    return (
      <div className='main-container'>
        <VerticalNav />
      </div>
    );
  }
}

export default AppContainer;