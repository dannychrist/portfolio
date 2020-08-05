import React, { useState } from 'react';

// Components
import NavLinks from '../Navigation/NavLinks';

import './Header.css';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen(true);
    document.body.classList.toggle('nav-open');
  };

  const closeHandler = () => {
    setIsOpen(false);
    document.body.classList.remove('nav-open');
  }

  return (
    <header className='header'>
      <button onClick={clickHandler} className='nav-toggle' aria-label='toggle navigation'>
        <span className='hamburger'></span>
      </button>
      <nav className='nav'>
        <ul className='nav__list'>
          <NavLinks closeHandler={closeHandler}/>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
