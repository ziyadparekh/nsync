import React, { Component } from 'react';
import ProductContainer from 'containers/ProductContainer';
import Parse from 'parse';

const styles = {
  mainContainer: {
    height: '100%',
    background: 'white',
    padding: '15px',
    overflow: 'hidden',
    overflowY: 'scroll'
  }
}

class AppContainer extends Component {
  render() {
    return (
      <div className='main-container'
        style={styles.mainContainer}>
        <ProductContainer />
        {this.props.children}
      </div>
    );
  }
}

export default AppContainer;