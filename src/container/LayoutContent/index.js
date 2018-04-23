import React from 'react';
import { Button } from 'react-bootstrap';
import './index.less';

const LayoutContent = ({ match, location, children }) => {
  return (
    <div className="mb30">
      <h4 className="manage-title h4-title border-bottom">数据大屏</h4>
      <div className="common-panel">
        <div className="panel-title clearfix">
          {children ? (
            <Button bsStyle="primary" className="btn-120-w pull-right">
              设置大屏
            </Button>
          ) : (
            ''
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default LayoutContent;
