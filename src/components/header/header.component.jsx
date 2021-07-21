import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../nav-bar/nav-bar.component';

import './header.styles.css';

const Header = () => {
  return(
    <div className='header'>
      <div className='navbar-day-container'>
        <NavBar />
        <div className='streak-container'>
          <span className='streak'>Streak: 1</span>
        </div>
      </div>
        <h2 className='greeting'>Hello Aine</h2>
      <div className='options'>
        <Link className='option' to='/'>Contact</Link>
        <Link className='option' to='/signin'>Signin</Link>
      </div>
    </div>
  );
};

export default Header;