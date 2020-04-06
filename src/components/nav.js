import React from 'react';
import {NavLink} from 'react-router-dom';
import { Menu } from 'antd';

const Nav = () => {
  return (
    <nav className="site-navigation">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><NavLink to="/">Home</NavLink></Menu.Item>
        <Menu.Item key="2"><NavLink to="/cart">Cart</NavLink></Menu.Item>
      </Menu>
    </nav>
  );
};

export default Nav;
