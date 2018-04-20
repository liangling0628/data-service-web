import { takeLatest } from 'redux-saga/effects';
import { GET_USER_INFO } from '../redux/user.redux';
import { GET_DMP_DATA } from '../redux/dmp.redux';
import { get_user_info } from './user.saga';
import { get_dmp_info } from './dmp.saga';

export default function* rootSaga() {
  yield [
    takeLatest(GET_USER_INFO, get_user_info),
    takeLatest(GET_DMP_DATA, get_dmp_info)
  ];
}
