import React from 'react';
import { Link } from 'react-router-dom';
import { MAIN_PAGE, ABOUT_US } from '../../utils/path';

const Header = () => {

    const navItems = [
        {
            title: "О нас",
            path: MAIN_PAGE,
        },
        {
          title: "О нас",
          path: MAIN_PAGE,
        },
        {
          title: "О нас",
          path: ABOUT_US ,
        },
      ];
      
  return (
    <header className='header'>
    <div className='container classes.headerInner'>
      <div className='leftSideBlock'>
        <div
          className='burgerMenuBtn'
        >
          <i>
            hello
          </i>
        </div>
        <div className='headerLogo'>
          <i>
            theTech
          </i>
        </div>
      </div>
      <ul className='headerNavInner'>
        {navItems.map((nav) => (
          <li key={nav.path}>
            <Link
              to={nav.path}
              title={nav.title}
            >
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </header>
  )
}

export default Header


