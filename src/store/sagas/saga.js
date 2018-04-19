import { takeLatest } from 'redux-saga/effects';
import { GET_USER_INFO } from '../redux/user.redux';
import { get_user_info } from './user.saga';

export default function* rootSaga() {
  yield takeLatest(GET_USER_INFO, get_user_info);
}
