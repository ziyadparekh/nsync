import React, { Component, PropTypes } from 'react';
import { CREATE_CHANNEL_PLACEHOLDER } from 'constants/copy';

const propTypes = {
  isValid: PropTypes.bool.isRequired,
  channelName: PropTypes.string.isRequired,
  playlist: PropTypes.arrayOf(PropTypes.object).isRequired,
  errorMsg: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const style = {
  
}

class CreateChannelContainer extends Component {
  constructor(props) {
    super(props);
    this.handleOnKeyPress = this.handleOnKeyPress.bind(this);
  }
  handleOnKeyPress(e) {

  }
  renderErrorMessage() {
    if (this.props.isValid) {
      return <div></div>;
    }
    return (
      <div className='error-message' style={style.error}>
        <p className='message' style={style.message}>
          {this.props.errorMsg}
        </p>
      </div>
    );
  }
  renderChannelInput() {
    return (
      <input 
        type='text'
        placeholder={CREATE_CHANNEL_PLACEHOLDER}
        ref='channel'
        onKeyPress={this.handleOnKeyPress}
        className='channel-input'
        style={style.input}
      />
    );
  }
  renderButton(state) {
    let buttonStyle;
    switch(state) {
      case 'disabled':
      buttonStyle = style.disabled
      break;
      default:
      buttonStyle = style.default
      break;
    }
    return (
      <button
        type='submit'
        onClick={this.handleOnClick}
        className='submit-button'
        style={buttonStyle} 
      >
        Create
      </button>
    );
  }
  renderButton() {
    const { isLoading } = this.props;
    if (isLoading) {
      return this.renderButton('disabled');
    }
    return this.renderDefaultButton();
  }
  render() {
    return (
      <div className='container' style={style.container}>
        <div className='row' style={style.row}>
          {this.renderErrorMessage()}
          {this.renderChannelInput()}
          {this.renderButton()}
        </div>
      </div>
    );
  }
}

CreateChannelContainer.propTypes = propTypes

export default CreateChannelContainer;
