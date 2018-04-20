export const GET_DMP_DATA = 'GET_DMP_DATA';
export const SET_DMP_DATA = 'SET_DMP_DATA';

export function dmp(state = { dmp_list: [] }, action) {
  switch (action.type) {
    case SET_DMP_DATA:
      return Object.assign({}, state, { dmp_list: action.data });
    default:
      return state;
  }
}

export function get_dmp_data() {
  return {
    type: GET_DMP_DATA
  };
}

export function set_dmp_data(data) {
  return {
    type: SET_DMP_DATA,
    data
  };
}
