import React, { Component } from 'react';
import { Input } from 'react-bootstrap'

class SingleTextForm extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {
      value: props.value || ''
    };
  }
  handleOnChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  getValue() {
    let value = this.refs[this.props.refType].value;
    return value;
  }
  render() {
    return (
      <Input
        value={this.state.value}
        type={this.props.type}
        onChange={this.handleOnChange}
        placehoder={this.props.placehoder}
        label={this.props.label}
        ref={this.props.refType}
      />
    );
  }
}

export default SingleTextForm;