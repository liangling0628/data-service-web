import React from 'react';
import { connect } from 'react-redux';
import LayoutContent from '../LayoutContent/index';
import { Route } from 'react-router-dom';
import ScreenContent from '../ScreenContent/index';
import { get_dmp_data } from '../../store/redux/dmp.redux';

@connect(state => state.dmp, { get_dmp_data })
class YDKF extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.get_dmp_data();
  }
  render() {
    const { match } = this.props;
    return (
      <div>
        <LayoutContent>
          <Route path={`/ydkf/:screen`} component={ScreenContent} />
        </LayoutContent>
      </div>
    );
  }
}

export default YDKF;
