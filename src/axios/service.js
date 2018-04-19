const _host_name = 'https://apple.myysq.com.cn/bms';

class Service {
  // 获取登入的用户信息
  static _get_login_data = `${_host_name}/Organization/layout/get-login-info`;
  // 获取头部导航栏数据
  static _get_navigation = `${_host_name}/Organization/layout/get-navigation`;

  static _get_app_auth = `${_host_name}/applicationAuth/application-auth/get-app-auth`;

  static _get_metnu = `${_host_name}/Organization/layout/get-menus?app_code=ManagementCenter`;

  static _get_login_out = `${_host_name}/auth/logout`;
}

export default Service;
