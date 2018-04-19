import React from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';

const YDKF = Loadable({
  loader: () => import('../container/ydkf'),
  loading: () => <div>loading...</div>
});
const YDYF = Loadable({
  loader: () => import('../container/ydyf'),
  loading: () => <div>loading...</div>
});
const YDZJ = Loadable({
  loader: () => import('../container/ydzj'),
  loading: () => <div>loading...</div>
});

const Routes = () => {
  return (
    <div>
      {/*<Switch>*/}
      <Route exact path="/ydkf" component={YDKF} />
      <Route exact path="/ydzj" component={YDZJ} />
      <Route exact path="/ydyf" component={YDYF} />
      <Route exact path="/" component={YDYF} />
      {/*</Switch>*/}
    </div>
  );
};

export default Routes;
