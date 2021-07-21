import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../nav-bar/nav-bar.component';

import './mock-header.styles.css';

const MockHeader = () => {
  return(
    <div className='mock-header'>
      <div className='mock-day-container'>
        <NavBar/>
        <span className='mock-day'>Current Day: 1</span>
      </div>
        <h2 className='mock-greeting'>Hello Aine</h2>
      <div className='options'>
        <Link className='option' to='/'>Home</Link>
        <Link className='option' to='/signin'>Signin</Link>
      </div>
    </div>
  );
};

export default MockHeader;