import { compose, applyMiddleware, createStore } from 'redux';
import ReduxSaga from 'redux-saga';

import reducers from './redux/index';
import rootSaga from './sagas/saga';

const ReducSagaMiddleware = ReduxSaga();
const Store = createStore(
  reducers,
  compose(
    applyMiddleware(ReducSagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReducSagaMiddleware.run(rootSaga);

export default Store;
