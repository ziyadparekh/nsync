import React, { Component } from 'react';
import VerticalNav from 'components/VerticalNav';
import ChatContainer from 'containers/ChatContainer';
import Parse from 'parse';

class AppContainer extends Component {
  render() {
    return (
      <div className='main-container'>
        <VerticalNav />
        <ChatContainer />
        {this.props.children}
      </div>
    );
  }
}

export default AppContainer;