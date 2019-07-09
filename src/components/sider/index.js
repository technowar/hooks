import React from 'react';
import { Menu, Typography } from 'antd';
import PropTypes from 'prop-types';
import { UseStateValue } from '../../provider';

function SiderComponent({ layout }) {
  const [state] = UseStateValue();
  const { item } = state;

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
        defaultOpenKeys={['hooks']}
        defaultSelectedKeys={['event']}
        mode="inline"
        onClick={handleClickMenu}
      >
        <Menu.SubMenu
          key="hooks"
          title={
            <Typography.Text>{item}</Typography.Text>
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
