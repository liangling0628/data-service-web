import { call, put, all } from 'redux-saga/effects';
import {
  set_login_data,
  set_login_out,
  set_navigation_data
} from '../redux/user.redux';
import { getData } from '../../axios/axios';
import Service from '../../axios/service';

export function* get_user_info() {
  try {
    const [user_data, nav_data] = yield all([
      call(getData, Service._get_login_data),
      call(getData, Service._get_navigation)
    ]);
    if (user_data.status && user_data.data) {
      yield put(set_login_data(user_data.data));
    } else {
      yield put(set_login_out());
      return false;
    }
    if (nav_data.status && nav_data.data) {
      yield put(set_navigation_data(nav_data.data));
    } else {
      yield put(set_login_out());
      return false;
    }
  } catch (err) {
    yield put(set_login_out());
    return false;
  }
}
