import { put, call } from 'redux-saga/effects';
import { set_dmp_data } from '../redux/dmp.redux';
import { getData } from '../../axios/axios';
import Service from '../../axios/service';

export function* get_dmp_info() {
  try {
    const res = yield call(getData, Service._get_dmp_list);
    console.log(res);
    if (res.status && res.data && res.data.length > 0) {
      yield put(set_dmp_data(res.data));
    } else {
      yield put(set_dmp_data([]));
    }
  } catch (err) {
    console.info(err);
  }
}
