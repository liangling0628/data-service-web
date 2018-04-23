import React, { Component } from 'react';

class HeaderWebMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectIndex: 6,
      list_show: false,
      list_show_class: false
    };
  }

  setStateHandle(key, value) {
    this.setState({
      [key]: value
    });
  }

  render() {
    const navInfo = this.props.navgition_info;
    const nav_data = navInfo.slice(0, 7);
    const nav_data_last = navInfo.slice(7);
    return (
      <ul
        className="module pull-left"
        id="header_module"
        style={{ width: '880px', marginLeft: '170px' }}
      >
        {nav_data &&
          nav_data.map((item, index) => {
            return (
              <li
                onClick={() => this.setStateHandle('selectIndex', index)}
                onMouseEnter={() =>
                  index === 6 && this.setStateHandle('list_show', true)
                }
                onMouseLeave={() =>
                  index === 6 && this.setStateHandle('list_show', false)
                }
                key={item.app_code}
                className={this.state.selectIndex === index ? 'on' : ''}
              >
                <a href={item.url}> {item.app_name}</a>
                {index === 6 && navInfo.length > 6 ? (
                  <span className="tree-arrow" />
                ) : (
                  ''
                )}
                {this.state.list_show && index === 6 && navInfo.length > 6 ? (
                  <ul className="last-ul">
                    {nav_data_last.map((item, index) => {
                      return (
                        <li
                          key={item.app_code}
                          onMouseEnter={() =>
                            this.setStateHandle('list_show_class', true)
                          }
                          onMouseLeave={() =>
                            this.setStateHandle('list_show_class', false)
                          }
                        >
                          <a
                            href={item.url}
                            className={`last-li ${
                              this.state.list_show_class ? '' : 'bg-hover'
                            }`}
                          >
                            {item.app_name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  ''
                )}
              </li>
            );
          })}
      </ul>
    );
  }
}

export default HeaderWebMenu;
