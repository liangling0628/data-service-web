import React from 'react';

const HeaderUserMenu = ({ userInfo }) => {
  return (
    <div className="user pull-right header_user">
      <div className="user_left">
        <div className="user_top">
          <span
            className="user_company company_a"
            data-title={userInfo.tenant_name}
            data-title-auto="true"
          >
            {userInfo.tenant_name}
          </span>
          <span
            className="user_company company_b"
            data-title={userInfo.org_name}
            data-title-auto="true"
          >
            {userInfo.org_name}
          </span>
        </div>
        <div className="user_bot">
          <span className="mr14">
            <a
              className="user-name"
              data-user="orgshtest"
              href={userInfo.passwd_url}
            >
              {userInfo.user_name}
            </a>
          </span>
        </div>
      </div>
      <div className="user_right">
        <span className="mr14">|</span>
        <a href={userInfo.logout_url}>退出</a>
      </div>
    </div>
  );
};

export default HeaderUserMenu;
