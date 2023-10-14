import React from 'react'
import Header from './Header';
import Footer from './Footer';
import './Plans.css';

export default function Plans() {
  return (
    <div className='plans'>
      <Header />
      <div className='container'>
          <div className='card std'>
            <ul>
              <li><h1>Standrad</h1></li>
              <li><h2>₹99/-</h2></li>
              <li>One Month Gym Access</li>
              <li><del>Personal Trainer Guidence</del></li>
              <li><del>Gym Relocation Facility</del></li>
              <li><del>Personalised Diet Plan</del></li>
              <li><del>Monthly Gift Box</del></li>
            </ul>
            </div>
        <div className='card dlx'>            
            <ul>
              <li><h1>Delux</h1></li>
              <li><h2>₹249/-</h2></li>
              <li>Six Month Gym Access</li>
              <li>Personal Trainer Guidence</li>
              <li>Gym Relocation Facility</li>
              <li><del>Personalised Diet Plan</del></li>
              <li><del>Monthly Gift Box</del></li>
            </ul>
            </div>
          <div className='card exe'>
            <ul>
              <li><h1>Executive</h1></li>
              <li><h2>₹999/-</h2></li>
              <li>Twelve Month Gym Access</li>
              <li>Personal Trainer Guidence</li>
              <li>Gym Relocation Facility</li>
              <li>Personalised Diet Plan</li>
              <li>Monthly Gift Box</li>
            </ul>
            </div>
      </div>
      <Footer />
    </div>
  )
}