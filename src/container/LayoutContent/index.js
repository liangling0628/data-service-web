import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './index.less';

@withRouter
class LayoutContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { match } = this.props;
    return (
      <div className="mb30">
        <h4 className="manage-title h4-title border-bottom">数据服务</h4>
        <div className="common-panel">
          <div className="panel-title clearfix">
            <Button bsStyle="primary" className="btn-120-w pull-right">
              设置大屏
            </Button>
          </div>
          <div>
            <ul className={'tab-nav'}>
              <li
                className={`${
                  this.props.location.pathname.indexOf('/singleScreen') > 0
                    ? 'on'
                    : ''
                }`}
              >
                <Link to={{ pathname: `${match.url}/singleScreen` }}>
                  单屏数据
                </Link>
              </li>
              <li
                className={`${
                  this.props.location.pathname.indexOf('/multiScreen') > 0
                    ? 'on'
                    : ''
                }`}
              >
                <Link to={{ pathname: `${match.url}/multiScreen` }}>
                  多屏数据
                </Link>
              </li>
            </ul>
            <div>{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default LayoutContent;
