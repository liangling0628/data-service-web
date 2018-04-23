import React from 'react';
import { connect } from 'react-redux';
import LayoutContent from '../LayoutContent/index';
import { get_dmp_data } from '../../store/redux/dmp.redux';
import LayoutContentRoute from '../LayoutContent/LayoutContentRoute/LayoutContentRoute';
@connect(null, { get_dmp_data })
class YDKF extends React.Component {
  componentDidMount() {
    this.props.get_dmp_data();
  }

  render() {
    return (
      <LayoutContent {...this.props}>
        <LayoutContentRoute {...this.props} />
      </LayoutContent>
    );
  }
}

export default YDKF;
