import React from 'react';
import HeaderWebMenu from '../../components/LayoutHeader/HeaderWebMenu';
import HeaderUserMenu from '../../components/LayoutHeader/HeaderUserMenu';
import { connect } from 'react-redux';
// import {get_navgator_data} from '../../redux/store/user.redux'
import './LayoutHeader.less';

@connect(state => state.user, undefined)
class LayoutHeader extends React.Component {
  render() {
    return (
      <div className="manage-header">
        <div className="container-fixed clearfix">
          <h3 className="logo pull-left">明源云链</h3>
          <HeaderWebMenu navgition_info={this.props.navgition_info} />
          <HeaderUserMenu userInfo={this.props.user_info} />
        </div>
      </div>
    );
  }
}

export default LayoutHeader;
