import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
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

const Error_404 = Loadable({
  loader: () => import('../components/Error/Error_404'),
  loading: () => <div>loading...</div>
});
const Routes = () => {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/ydkf/singleScreen" />}
        />
        <Route path="/ydkf" component={YDKF} />
        <Route path="/ydzj" component={YDZJ} />
        <Route path="/ydyf" component={YDYF} />
        <Route path="*" component={Error_404} />
      </Switch>
    </div>
  );
};

export default Routes;
