import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'actions/authed';
import * as copy from 'constants/copy';

const auth = {
  loginContainer: {
    margin: 'auto',
    position: 'relative',
    marginTop: '250px'
  },
  form: {
    width: '40%',
    margin: '0 auto',
    height: '100%',
    position: 'relative'
  },
  title: {
    textAlign: 'center'
  },
  topField: {
    outline: 'none',
    width: '80%',
    margin: 'auto',
    display: 'block',
    padding: '12px 16px',
    borderRadius: '3px',
    border: '1px solid grey',
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: '0px'
  },
  bottomField: {
    outline: 'none',
    width: '80%',
    margin: 'auto',
    display: 'block',
    padding: '12px 16px',
    borderRadius: '3px',
    border: '1px solid grey',
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px'
  },
  button: {
    padding: '15px',
    width: '80%',
    borderRadius: '3px',
    position: 'relative',
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '5px',
    background: 'blue',
    color: 'white',
    textAlign: 'center',
    cursor: 'pointer',
    textDecoration: 'none'
  },
  error: {
    padding: '15px',
    width: '80%',
    borderRadius: '3px',
    position: 'relative',
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '5px',
    background: 'red',
    color: 'white',
    textAlign: 'center',
    cursor: 'pointer',
    textDecoration: 'none'
  },
  loading: {
    padding: '15px',
    width: '80%',
    borderRadius: '3px',
    position: 'relative',
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '5px',
    background: 'green',
    color: 'white',
    textAlign: 'center',
    cursor: 'pointer',
    textDecoration: 'none'
  },
  signupLink: {
    textAlign: 'center',
    width: '80%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'lightgreen',
    cursor: 'pointer',
    marginTop: '10px'
  },
  loginLink: {
    textAlign: 'center',
    width: '80%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'lightblue',
    cursor: 'pointer',
    marginTop: '10px'
  }
}

class AuthContainer extends Component {
  constructor(props) {
    super(props);
    this.handleOnLoginClick = this.handleOnLoginClick.bind(this);
    this.handleOnAuthStepClick = this.handleOnAuthStepClick.bind(this);
    this.signupUser = props.actions.signupUser;
    this.loginUser = props.actions.loginUser;
    this.toggleStep = props.actions.toggleStep;
  }
  handleOnAuthStepClick(e) {
    e.preventDefault();
    const { authed } = this.props;
    const { authStep } = authed;
    if (authStep === copy.STEP_LOGIN) {
      return this.toggleStep(copy.STEP_SIGNUP);
    }
    return this.toggleStep(copy.STEP_LOGIN);
  }
  handleOnLoginClick(e) {
    e.preventDefault();
    const { authed } = this.props;
    const { authStep } = authed;
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    if (username === '' ||
        password === '') {
      return;
    }
    switch(authStep) {
      case copy.STEP_LOGIN:
      this.loginUser(username, password);
      break;
      case copy.STEP_SIGNUP:
      this.signupUser(username, password);
      break;
      default:
      break;
    }
  }
  renderLink() {
    const { authed } = this.props;
    const { authStep } = authed;
    let style, text;
    switch(authStep) {
      case copy.STEP_LOGIN:
      style = auth.signupLink;
      text = 'Need an account?';
      break;
      case copy.STEP_SIGNUP:
      style = auth.loginLink;
      text = 'Have an account?';
      break;
      default:
      break;
    }
    return (
      <a href='#'
        style={style}
        className='auth-link'
        onClick={this.handleOnAuthStepClick}>
        { text }
      </a>
    );
  }
  renderButton() {
    const { authed } = this.props;
    const { buttonState, errMsg, authStep } = authed;
    let style, text, onClick;
    
    switch(buttonState) {
      case copy.IS_LOADING:
      style = auth.loading;
      text = 'Loading...';
      break;
      case copy.IS_ERROR:
      style = auth.error;
      text = errMsg;
      break;
      default:
      style = auth.button;
      onClick = this.handleOnLoginClick;
      text = authStep === copy.STEP_LOGIN ? 
        'Login' : 'Sign up';
    }

    return (
      <a href='#'
        style={style}
        onClick={ onClick || null }
        className='login-button'>
        { text }
      </a>
    );
  }
  render() {
    const { authed } = this.props;
    const { authStep } = authed;
    const title = authStep === copy.STEP_LOGIN ? 
        'Welcome back!' : 'Come through!';
    return (
      <div className='container'>
        <div className='col-xs-10'>
          <div className='login-container'
            style={auth.loginContainer}>
            <div className='login-form'
              style={auth.form}>
              <h2 className='login-title'
                style={auth.title}>
                {title}
              </h2>
              <input type='text'
                ref='username'
                style={auth.topField}
                className='top-field'
                placeholder='username (required)'
              />
              <input type='password'
                style={auth.bottomField}
                ref='password'
                className='bottom-field'
                placeholder='password (required)'
              />
              {this.renderButton()}
              {this.renderLink()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { authed } = state;
  return {
    authed
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer);