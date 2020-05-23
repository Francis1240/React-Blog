import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => (
    <nav class="topNavbar">
        <NavLink exact to="/" activeClassName="activeNav"> Home </NavLink>   
        <NavLink exact to="/about" activeClassName="activeNav"> About </NavLink>   
        <NavLink to="/article" activeClassName="activeNav"> Articles </NavLink>   
        <div class="emptySpace"/> 
        <a href="https://github.com/Francis1240/React-Blog-Project"> GitHub Repo</a>   
    </nav>

);

export default NavBar;