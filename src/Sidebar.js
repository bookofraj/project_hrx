import React from 'react'
import { Link } from 'react-router-dom'
import fblogo from './images/fb-logo.png'
import instalogo from './images/insta-logo.png'
import twitterlogo from './images/twitter-logo-removebg.png'
import ytlogo from './images/yt-logo-removebg.png'
import './Sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <Link to='https://www.facebook.com'><img src={ fblogo } alt="facebook logo" /></Link>
      <Link to='https://www.instagram.com'><img src={ instalogo } alt="instagarm logo" /></Link>
      <Link to='https://www.twitter.com'><img src={ twitterlogo } alt="twitter logo" /></Link>
      <Link to='https://www.youtube.com'><img src={ ytlogo } alt="youtube logo" /></Link>
    </div>
  )
}
