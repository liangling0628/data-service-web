import React from 'react';
import { Route } from 'react-router-dom';

import YDKF from '../container/ydkf';
import YDYF from '../container/ydyf';
import YDZJ from '../container/ydzj';

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
