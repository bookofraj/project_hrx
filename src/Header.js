import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className='header'>
      <div className='logo'>
      <Link to='/'><img src="./hrx-logo.png" alt="logo" /></Link>
      </div>
      <div className='navlist'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <p>|</p>
        <li><Link to='/plans'>Membership</Link></li>
        <p>|</p>
        <li><Link to='/about'>About Us</Link></li>
        <p>|</p>
        <li><Link to='/contact'>Contact Us</Link></li>
        <p>|</p>
        <li><Link to=''>Locate Store</Link></li>
      </ul>
      </div>
    </div>
  )
}
