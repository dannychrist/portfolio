import React from 'react';

// Icons
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import './Footer.css';

const Footer = (props) => {
  return (
    <footer className='footer'>
      <ul className='social-list'>
        <li className='social-list__item'>
          <a
            className='social-list__link'
            href='mailto:d.christiansen125@gmail.com'
          >
            <MailOutlineIcon style={{ color: '#FF9233', fontSize: 30 }} />
          </a>
        </li>
        <li className='social-list__item'>
          <a
            className='social-list__link'
            href='https://www.linkedin.com/in/daniel-christiansen-web-developer/'
          >
            <LinkedInIcon style={{ color: '#FF9233', fontSize: 30 }} />
          </a>
        </li>
        <li className='social-list__item'>
          <a
            className='social-list__link'
            href='https://github.com/dannychrist'
          >
            <GitHubIcon style={{ color: '#FF9233', fontSize: 30 }} />
          </a>
        </li>
      </ul>
      <p className='footer__link'>Copyright &copy; 2020 Daniel Christiansen all rights reserved.</p>
    </footer>
  );
};

export default Footer;
