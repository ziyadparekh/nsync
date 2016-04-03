import React, { Component } from 'react';
import FormBuilder from 'components/FormBuilder';

class CreateChannelContainer extends Component {
  constructor(props) {
    super(props);
    this.config = props.config;
    this.handleBackPress = this.handleBackPress.bind(this);
    this.handleNextPress = this.handleNextPress.bind(this);

    this.state = {
      currentPage: 1
    }
  }

  handleNextPress(e) {
    let currentPage = this.state.currentPage;
    let totalPages = this.config.totalPages;
    if (currentPage < totalPages) {
      this.setState({
        currentPage: currentPage + 1
      });
    }
  }

  handleBackPress(e) {
    let currentPage = this.state.currentPage;
    if (currentPage > 0) {
      this.setState({
        currentPage: currentPage - 1
      });
    }
  }

  render() {
    let config = this.config;
    return (
      <FormBuilder
        formConfig={config.formConfig}
        totalPages={config.totalPages}
        currentPage={this.state.currentPage}
        handleBack={this.handleBackPress}
        handleNext={this.handleNextPress}
        ref='CreateChannelForm'
      />
    );
  }
}

export default CreateChannelContainer;