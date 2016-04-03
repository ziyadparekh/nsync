import React, { Component } from 'react';
import { Panel, Input, ButtonInput } from 'react-bootstrap';
import objectAssign from 'object-assign';

const style = {
  panel: {
    marginLeft: 'auto',
    marginRight: 'auto',
    float: 'none'
  }
}

class FormBuilder extends Component {
  constructor(props) {
    super(props);
    
    this.formConfig = props.formConfig;
    this.handleBack = props.handleBack;
    this.handleNext = props.handleNext;

  }
  renderButton(type, value, func, options) {
    return (
      <ButtonInput
        type={type}
        value={value}
        onClick={func}
        {...options}
      />
    );
  }
  renderFormFooter() {
    return (
      <div>
        {this.renderButton('submit', 'Back', this.handleBack, {})}
        {this.renderButton('submit', 'Next', this.handleNext, {})}
      </div>
    );
  }
  renderFormStep() {
    let formConfig = this.formConfig;
    let step = this.props.currentPage;
    let Element = formConfig[step].component;
    let props = formConfig[step].props;

    return <Element {...props} /> 
  }
  render() {
    return (
      <Panel className="col-xs-8" style={style.panel}>
        {this.renderFormStep()}
        {this.renderFormFooter()}
      </Panel>
    );
  }
}

export default FormBuilder;