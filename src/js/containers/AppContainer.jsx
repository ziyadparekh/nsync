import React, { Component } from 'react';
import NavigationContainer from 'containers/NavigationContainer';
import ChatContainer from 'containers/ChatContainer';
import Parse from 'parse';

class AppContainer extends Component {
  render() {
    return (
      <div className='main-container'>
        <NavigationContainer />
        <ChatContainer />
        {this.props.children}
      </div>
    );
  }
}

export default AppContainer;