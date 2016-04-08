import React, { Component } from 'react';
import VerticalNav from 'components/VerticalNav';
import ChatContainer from 'containers/ChatContainer';

class AppContainer extends Component {
  render() {
    return (
      <div className='main-container'>
        <VerticalNav />
        <ChatContainer />
      </div>
    );
  }
}

export default AppContainer;