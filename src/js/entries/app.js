const ReactDOM = require('react-dom')
const React = require('react')

import App from 'components/App';

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'));
