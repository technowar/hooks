import React from 'react';
import { Menu, Typography } from 'antd';
import PropTypes from 'prop-types';

function SiderComponent({ layout }) {
  function handleClickMenu({ key }) {
    console.log(key);
  }

  return (
    <layout.Sider
      breakpoint="lg"
      collapsedWidth="0"
      theme="light"
    >
      <Menu
        defaultOpenKeys={['vwcs']}
        defaultSelectedKeys={['event']}
        mode="inline"
        onClick={handleClickMenu}
      >
        <Menu.SubMenu
          key="vwcs"
          title={
            <Typography.Text>VWCS</Typography.Text>
          }
        >
          <Menu.Item key="event">Event</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </layout.Sider>
  );
}

SiderComponent.propTypes = {
  layout: PropTypes.instanceOf(Object).isRequired,
};

export default SiderComponent;
