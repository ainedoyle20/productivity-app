import React from 'react';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { RiCloseFill } from 'react-icons/ri';
import { GoLightBulb } from 'react-icons/go';
// import { IconContext } from 'react-icons/lib';

import NavBarData from './nav-bar.data';

import './nav-bar.styles.css';

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      sidebar: false
    };
  };

  showSidebar = () => {
    this.setState({ sidebar: !this.state.sidebar });
  }


  render() {
    const { sidebar } = this.state;
    return(
      <>
        <div className='nav-bar'>
          <Link className='menu-items' to='#'>
            <BiMenu onClick={this.showSidebar}/>
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={this.showSidebar}>
            <div className='logo-content'>
              <Link to='#' className='menu-bars'>
                <BiMenu />
              </Link>
              <div className='logo'>
                <GoLightBulb />
              </div>
              <div className='logo-name'>Productivity App</div>
            </div>
            {
              NavBarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </nav>
      </>
    );
  }
  
};

export default NavBar;