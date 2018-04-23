import React from 'react';
import './index.less';

const LayoutContent = ({ match, location, children }) => {
  return (
    <div className="mb30">
      <h4 className="manage-title h4-title border-bottom">数据大屏</h4>
      <div className="common-panel">
        <div className="panel-title clearfix">
          {children ? (
            <span className="btn btn-primary btn-120-w pull-right">
              设置大屏
            </span>
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
