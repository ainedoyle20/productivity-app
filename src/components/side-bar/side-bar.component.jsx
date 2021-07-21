import React from 'react';
import { Link } from 'react-router-dom';

import './side-bar.styles.css';

const SideBar = () => {
  return(
    <div className='side-bar'>
      <div className='logo-content'>
        <div className='logo'>
          <i className='bx bx-bulb'></i>
          <div className='logo-name'>ProductivityApp</div>
        </div>
        <i className='bx bx-menu' id='btn' ></i>
      </div>
      <ul className='nav-list'>
        <li>
          <Link to='#'>
            <i class='bx bx-calculator' ></i>
            <span className='links-name'>Calculator</span>
          </Link>
          <span className='tooltip'>Calculator</span>
        </li>
        <li>
          <Link to='#'>
          <i class='bx bx-calendar' ></i>
            <span className='links-name'>History</span>
          </Link>
          <span className='tooltip'>History</span>
        </li>
        <li>
          <Link to='#'>
          <i class='bx bx-line-chart' ></i>
            <span className='links-name'>Growth</span>
          </Link>
          <span className='tooltip'>Growth</span>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;