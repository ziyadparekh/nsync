import React, { Component } from 'react';
import { Input } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <form className="form-horizontal">
        <Input label="Username" type="text" />
        <Input label="Passowrd" type="password" />
      </form>
    )
  }
}

export default App;