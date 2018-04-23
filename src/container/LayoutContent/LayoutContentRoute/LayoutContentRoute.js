import React from 'react';
import { Link, Route } from 'react-router-dom';
import ScreenContent from '../ScreenContent';

const LayoutContentRoute = ({ match, location }) => {
  return (
    <div>
      <ul className={'tab-nav'}>
        <li
          className={`${
            location.pathname.indexOf('/singleScreen') > 0 ? 'on' : ''
          }`}
        >
          <Link to={{ pathname: `${match.url}/singleScreen` }}>单屏数据</Link>
        </li>
        <li
          className={`${
            location.pathname.indexOf('/multiScreen') > 0 ? 'on' : ''
          }`}
        >
          <Link to={{ pathname: `${match.url}/multiScreen` }}>多屏数据</Link>
        </li>
      </ul>
      <div>
        {<Route path={match.url + '/:screen'} component={ScreenContent} />}
      </div>
    </div>
  );
};

export default LayoutContentRoute;
