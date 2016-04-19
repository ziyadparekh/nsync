import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authorizeUser } from 'actions/authed';
import * as copy from 'constants/copy';

import VerticalNav from 'components/VerticalNav';

const propTypes = {
  
};

class NavigationContainer extends Component {
  constructor(props) {
    super(props);
    this.authorizeUser = this.props.actions.authorizeUser;
  }
  componentWillMount() {
    this.authorizeUser();
  }
  render() {
    const { authed } = this.props;
    const { user } = authed;

    return (
      <VerticalNav 
        user={user} />
    );
  }
}

NavigationContainer.propTypes = propTypes;

function mapStateToProps(state) {
  const { authed } = state;
  return {
    authed
  }
}

function mapDispatchToProps(dispatch) {
  const actions = {
    authorizeUser
  }
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationContainer);