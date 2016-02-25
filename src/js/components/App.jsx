import React, { Component } from 'react';
import { Panel, Input, ButtonInput } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <Panel className="col-xs-8" style={{marginLeft:"auto", marginRight: "auto", float: "none"}}>
        <form className="form-horizontal">
          <Input type="text" label="Username" labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
          <Input type="password" label="Password" labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
          <Input type="checkbox" label="Remember Me" wrapperClassName="col-xs-offset-2 col-xs-10" help="Offset is applied to wrapper." />
          <ButtonInput type="submit" value="Submit Button" className="pull-right" />
        </form>
      </Panel>
    )
  }
}

export default App;