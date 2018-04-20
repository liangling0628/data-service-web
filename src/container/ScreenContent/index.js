import React from 'react';

class ScreenContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        {match.params.screen == 'singleScreen' ? (
          <div>单屏</div>
        ) : (
          <div>多屏</div>
        )}
      </div>
    );
  }
}

export default ScreenContent;
