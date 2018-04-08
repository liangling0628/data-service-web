class Service {

    static _host_name = 'https://apple.myysq.com.cn/bms'

    static _get_login_data = `/Organization/layout/get-login-info`
    // 获取头部导航栏数据
    static _get_navigation = `/Organization/layout/get-navigation`

    static _get_app_auth = `/applicationAuth/application-auth/get-app-auth`

    static _get_metnu = `/Organization/layout/get-menus?app_code=ManagementCenter`

}


export default Service

