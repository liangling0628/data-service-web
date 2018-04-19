//User --- Actions Type
export const SET_LOGIN_DATA = 'SET_LOGIN_DATA';
export const SET_LOGIN_OUT = 'SET_LOGIN_OUT';
export const SET_NAVIGATION_DATA = 'SET_NAVIGATION_DATA';
export const GET_USER_INFO = 'GET_USER_INFO';

//User --- initail state
const initail_state = {
  user_info: {}, //登入的用户信息
  not_login: false, //用户是否登入标志
  navgition_info: [] //用户的授权网站
};

//User --- reducer
export function user(state = initail_state, action) {
  switch (action.type) {
    case SET_LOGIN_DATA:
      return Object.assign({}, state, { user_info: action.data });
    case SET_LOGIN_OUT:
      return Object.assign(
        {},
        initail_state,
        { user_info: {} },
        { not_login: true }
      );
    case SET_NAVIGATION_DATA:
      return Object.assign({}, state, { navgition_info: action.data });
    default:
      return state;
  }
}

//User --- Action Creater
export function set_login_data(data) {
  return {
    type: SET_LOGIN_DATA,
    data
  };
}

export function set_login_out() {
  return {
    type: SET_LOGIN_OUT
  };
}

export function set_navigation_data(data) {
  return {
    type: SET_NAVIGATION_DATA,
    data
  };
}

export function get_user_info() {
  return {
    type: GET_USER_INFO
  };
}
