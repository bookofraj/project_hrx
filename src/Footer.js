import React from 'react'
import './Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
    <ul className='lst1'>
      <li><h3>Our Executives</h3></li>
      <li>Chairman</li>
      <li>Managing Director</li>
      <li>Chief Executive Offcier</li>
      <li>Brand Ambassador</li>
      <li>Chief Dietitian</li>
      <li>Chief Trainer</li>
    </ul>
    <ul className='lst2'>
      <li><h3>My HRX</h3></li>
      <li>My Account</li>
      <li>My Diet Plan</li>
      <li>My Track Record</li>
    </ul>
    <ul className='lst3'>      
    <li><h3>Media Centre</h3></li>
    <li>In The Press</li>
    <li>Press Release</li>
    <li>Product Pictures</li>
    </ul>
    </div>
  )
}
