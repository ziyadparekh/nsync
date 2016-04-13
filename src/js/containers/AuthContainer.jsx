import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'actions/authed';

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
  }

}

// style='auth.topField'
// style='auth.bottomField'
// style='auth.button'

class AuthContainer extends Component {
  constructor(props) {
    super(props);
    this.handleOnLoginClick = this.handleOnLoginClick.bind(this);
    this.signupUser = props.actions.signupUser
  }
  handleOnLoginClick(e) {
    e.preventDefault();
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    if (username === '' ||
        password === '') {
      return;
    }

    this.signupUser(username, password);
  }
  render() {
    return (
      <div className='container'>
        <div className='col-xs-10'>
          <div className='login-container'
            style={auth.loginContainer}>
            <div className='login-form'
              style={auth.form}>
              <h2 className='login-title'
                style={auth.title}>
                Login
              </h2>
              <input type='text'
                ref='username'
                style={auth.topField}
                className='top-field'
                placeholder='Username (required)'
                 />
              <input type='password'
                style={auth.bottomField}
                ref='password'
                className='bottom-field'
                placeholder='password (required)'
                 />
              <a href=''
                style={auth.button}
                onClick={this.handleOnLoginClick}
                className='login-button'>
                Login
              </a>
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