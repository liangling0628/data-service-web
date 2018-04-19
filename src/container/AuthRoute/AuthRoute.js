import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Service from '../../axios/service';
import { get_user_info } from '../../store/redux/user.redux';

@connect(state => state.user, { get_user_info })
@withRouter
class AuthRoute extends React.Component {
  componentWillMount() {
    this.props.get_user_info();
  }

  render() {
    this.props.not_login ? (window.location.href = Service._get_login_out) : '';
    return null;
  }
}

export default AuthRoute;
