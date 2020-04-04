import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="site-navigation">
      <ul className="main-menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
