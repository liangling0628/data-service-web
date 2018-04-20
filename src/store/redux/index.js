import { combineReducers } from 'redux';
import { user } from './user.redux';
import { dmp } from './dmp.redux';

const reducers = combineReducers({ user, dmp });

export default reducers;
