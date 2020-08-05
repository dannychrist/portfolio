import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './NavLinks.css';

const NavLinks = ({ closeHandler }) => {
  return (
    <ul className='nav__list'>
      <li className='nav__item'>
        <Link onClick={closeHandler} smooth to='/' className='nav__link'>
          Home
        </Link>
      </li>
      <li className='nav__item'>
        <Link
          onClick={closeHandler}
          smooth
          to='/services'
          className='nav__link'
        >
          My Services
        </Link>
      </li>
      <li className='nav__item'>
        <Link onClick={closeHandler} smooth to='/about' className='nav__link'>
          About Me
        </Link>
      </li>
      <li className='nav__item'>
        <Link onClick={closeHandler} smooth to='/work' className='nav__link'>
          My Work
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
