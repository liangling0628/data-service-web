import React from 'react'

const headerData = [
    {id: 'glzx', url: 'https://manage-test.myysq.com.cn?_smp=ManagementCenter', name: '管理中心'},
    {id: 'yyzx', url: 'https://wx-test.myysq.com.cn/retesting/wechat/menu/index?_smp=OperationCenter', name: '运营中心'},
    {id: 'ydyf', url: 'https://yf-test.myysq.com.cn?_smp=MobileCheckRoom', name: '移动验房'},
    {id: 'ydkf', url: 'http://kefu-test.myysq.com.cn?_smp=CustomerService', name: '移动客服'},
    {id: 'hyzx', url: 'https://member-test.myysq.com.cn?_smp=MemberCenter', name: '会员中心'},
    {id: 'kfzx', url: 'https://property-test.myysq.com.cn?_smp=PropertyManagement', name: '客服中心'},
    {id: 'sjfw', url: '/', name: '数据服务'}
]

class LayoutHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectIndex: 6
        }
    }

    selectHandle(index) {
        this.setState({
            selectIndex: index
        })
    }

    render() {
        return (
            <div className="manage-header">
                <div className="container-fixed clearfix">
                    <h3 className="logo pull-left">明源云链</h3>
                    <ul className="module pull-left" id="header_module" style={{width: '880px', marginLeft: '170px'}}>
                        {
                            headerData.map((item, index) => {
                                return (<li onClick={() => this.selectHandle(index)} key={item.id}
                                            className={this.state.selectIndex === index ? 'on' : ''}>
                                    <a href={item.url}>{item.name}</a>
                                </li>)
                            })
                        }
                    </ul>
                    <div className="user pull-right header_user">
                        <div className="user_left">
                            <div className="user_top">
                                <span className="user_company company_a" data-title="1108建库测试2"
                                      data-title-auto="true">1108建库测试2</span>
                                <span className="user_company company_b" data-title="saas专用"
                                      data-title-auto="true">saas专用</span>
                            </div>
                            <div className="user_bot">
                                <span className="mr14">
                                    <a className="user-name"
                                       data-user="orgshtest"
                                       href="https://apple.myysq.com.cn/bms/orgshtest/Organization/user/password?_ac=ManagementCenter">超级用户</a>
                                </span>
                            </div>
                        </div>
                        <div className="user_right">
                            <span className="mr14">|</span>
                            <a href="https://apple.myysq.com.cn/bms/auth/logout">退出</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default LayoutHeader