import React from 'react';
import './Head.js';
import pic from './images/icon.png';

export default function Head(){
  return(
    <header>
      <nav className='nav'>
        <img src={pic} className='img' alt="" />
        <ul className='nav-list'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

