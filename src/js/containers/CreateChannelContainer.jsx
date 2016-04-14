import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authorizeUser } from 'actions/authed';
import { createChannel } from 'actions/channel';
import * as copy from 'constants/copy';

const propTypes = {
  
};

const style = {
  container: {
    float: 'left'
  },
  row: {
    marginTop: '150px'
  },
  form: {
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  message: {},
  input: {
    width: '100%',
    padding: '15px 21px',
    outline: 'none',
    fontSize: '18px',
    borderRadius: '3px',
    border: '1px solid lightgrey',
    color: 'black',
    marginBottom: '10px'
  },
  loading: {
    width: '100%',
    padding: '12px',
    fontSize: '18px',
    borderRadius: '3px',
    outline: 'none',
    border: '1px solid lightgreen',
    background: 'lightgreen',
    color: 'white'
  },
  error: {
    width: '100%',
    padding: '12px',
    fontSize: '18px',
    borderRadius: '3px',
    outline: 'none',
    border: '1px solid red',
    background: 'red',
    color: 'white'
  },
  default: {
    width: '100%',
    padding: '12px',
    fontSize: '18px',
    borderRadius: '3px',
    outline: 'none',
    border: '1px solid lightblue',
    background: 'lightblue',
    color: 'white'
  },
  title: {
    color: 'blue'
  },
  loginLink: {},
  unauthWrapper: {},
  unauthTitle: {},
  unauthMessage: {}
};

class CreateChannelContainer extends Component {
  constructor(props) {
    super(props);
    this.handleOnKeyPress = this.handleOnKeyPress.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.authorizeUser = this.props.actions.authorizeUser;
    this.createChannel = this.props.actions.createChannel;
  }
  componentWillMount() {
    this.authorizeUser();
  }
  handleOnClick(e) {
    e.preventDefault();
    const name = this.refs.channel.value;
    if (name !== '') {
      this.createChannel(name);
    }
  }
  handleOnKeyPress(e) {
    if (e.charCode === 13) {
      const value = e.currentTarget.value.trim();
      if (value !== '') {
        this.createChannel(value);
      }
    }
  }
  renderChannelInput() {
    return (
      <input 
        type='text'
        placeholder='Enter name for channel'
        ref='channel'
        onKeyPress={this.handleOnKeyPress}
        className='channel-input'
        style={style.input}
      />
    );
  }
  _renderButton(state) {
    let buttonStyle, onClick,
    buttonText;
    switch(state) {
      case copy.IS_LOADING:
      buttonStyle = style.loading;
      buttonText = 'Loading...';
      break;
      case copy.IS_ERROR:
      buttonStyle = style.error;
      buttonText = 'Oops we encountered a problem';
      break;
      default:
      buttonStyle = style.default;
      buttonText = 'Create';
      onClick = this.handleOnClick;
      break;
    }
    return (
      <button
        type='submit'
        onClick={onClick || null}
        className='submit-button'
        style={buttonStyle}>
        {buttonText}
      </button>
    );
  }
  renderButton() {
    const { channel } = this.props;
    const { buttonState } = channel;
    return this._renderButton(buttonState);
  }
  renderLink(href, text, style) {
    return (
      <a href={href}
        style={style}>
        {text}
      </a>
    );
  }
  renderUnauthorized() {
    const loginLink = this.renderLink('/login', 
      'here', style.loginLink);
    return (
      <div className='unauth-wrapper'
        style={style.unauthWrapper}>
        <h2 className='unauth-title'
          style={style.unauthTitle}>
          You need to have an account 
          to create a channel.
        </h2>
        <h3 className='unauth-message'
          style={style.unauthMessage}>
          {'You can access the account' 
          + ' page over ' + {loginLink} 
          + '.'}
        </h3>
      </div>
    );
  }
  renderCreateChannel() {
    return (
      <div style={style.form}>
        <h2 style={style.title}>Create a channel</h2>
        {this.renderChannelInput()}
        {this.renderButton()}
      </div>
    );
  }
  render() {
    const { authed } = this.props;
    const { user, authState } = authed;
    let component;
    if (user && authState === 'AUTHORIZED') {
      component = this.renderCreateChannel();
    } else {
      component = this.renderUnauthorized();
    }
    return (
      <div className='container' style={style.container}>
        <div className='row' style={style.row}>
          {component}
        </div>
      </div>
    );
  }
}

CreateChannelContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const { channel, authed } = state;
  return {
    authed,
    channel
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    authorizeUser,
    createChannel
  }
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateChannelContainer);
