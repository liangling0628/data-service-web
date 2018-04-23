import React from 'react';
import { connect } from 'react-redux';
import { get_dmp_data } from '../../store/redux/dmp.redux';
import LayoutContent from '../LayoutContent/index';

@connect(null, {
  get_dmp_data
})
class YDYF extends React.Component {
  componentDidMount() {
    this.props.get_dmp_data();
  }

  render() {
    return <LayoutContent {...this.props} />;
  }
}

export default YDYF;
