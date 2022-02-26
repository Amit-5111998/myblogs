import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';
import classes from "./nav.module.css";
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img className={classes.logo} src={require('../../images/pumpkinhead-orange.svg')} alt='logo' /> Blogs
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/blogs' activeStyle>
            Blogs
          </NavLink>
        </NavMenu>
        
      </Nav>
    </>
  );
};

export default Navbar;
