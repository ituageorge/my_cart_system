// import React from 'react';
import * as React from 'react';

import './header.css'

const Header: React.FC = () => (
  <header>
    <nav className='header_nav'>
      <h1>My App</h1>
      <ul className='header_list'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
