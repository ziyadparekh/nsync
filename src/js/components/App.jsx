import React, { Component } from 'react';
import { Panel, Input, ButtonInput } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <Panel className="col-xs-8" style={{marginLeft:"auto", marginRight: "auto", float: "none"}}>
        <form className="form-horizontal">
          <Input label="Username" type="text" />
          <Input label="Passowrd" type="password" />
          <ButtonInput type="submit" value="Login" />
        </form>
      </Panel>
    )
  }
}

export default App;