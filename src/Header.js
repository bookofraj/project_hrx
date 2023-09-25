import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import logo from "./images/hrx-logo.png";

export default function Header() {
  return (
    <nav className='header'>
      <input type="checkbox" id="check" />
        <label for="check" class="checkbtn btn1">
            <span class="material-symbols-outlined">
                menu
                </span>
        </label>
        <label for="check" class="checkbtn btn2">
            <span class="material-symbols-outlined">
                close
                </span>
        </label>
        <Link to='/'><img className='logo' src={logo} alt='hrx logo' /></Link>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/plans'>Membership</Link></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
          <li><Link to=''>Locate Store</Link></li>
        </ul>
    </nav>
  )
}
