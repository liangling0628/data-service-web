import React from 'react';
import { connect } from 'react-redux';
import { get_user_info } from '../../store/redux/user.redux';

@connect(state => state.user, { get_user_info })
class AuthRoute extends React.Component {
  componentWillMount() {
    this.props.get_user_info();
  }

  render() {
    if (this.props.not_login) {
      window.location.href = this.props.user_info.logout_url
        ? this.props.user_info.logout_url
        : 'https://apple.myysq.com.cn/zhangzf/bms/auth/logout';
      return <div>没有登入</div>;
    }
    return null;
  }
}

export default AuthRoute;
