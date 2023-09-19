import React from 'react'
import './Vdo.css';
import vdobg from './images/home-bg-vdo.mp4';

export default function Vdo() {
  return (
    <div className='Vdo'>
        <video src={vdobg} autoPlay loop muted className='bg-vdo' />
        <div className='para'>
        <h1>Start Your Fitness Journey Today!</h1>
        <p>What You Are Waiting For...</p>
        </div>
    </div>
  )
}
