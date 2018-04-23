import React from 'react';
import { connect } from 'react-redux';
import './index.less';

@connect(state => state.dmp)
class ScreenContent extends React.Component {
  render() {
    const { match, dmp_list } = this.props;
    console.log(dmp_list);
    return (
      <div>
        {match.params.screen === 'singleScreen' ? (
          <div className="screen-container">
            {dmp_list &&
              dmp_list.map((item, index) => {
                return (
                  <a className="screen-item" key={item.id}>
                    <span
                      className="screen-img"
                      style={
                        item.cover
                          ? { background: `url("${item.cover}")` }
                          : undefined
                      }
                    />
                    <span className="screen-des">2018-04-23大屏</span>
                    <span className="screen-des">查看大屏</span>
                  </a>
                );
              })}
          </div>
        ) : (
          <div>多屏</div>
        )}
      </div>
    );
  }
}

export default ScreenContent;
