import React from "react";
import { NavLink } from 'react-router-dom';
import '../styles/components/Header.scss'

const Header = () => (
  <div>
    <h1>Expense App</h1>
    <NavLink to='/' activeClassName='isActive' exact>Dashboard</NavLink>
    <NavLink to='/create' activeClassName='isActive' >Add Expense</NavLink>
    <NavLink to='/help' activeClassName='isActive' >Help</NavLink>
  </div>
);

export default Header;