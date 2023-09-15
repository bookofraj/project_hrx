import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import'./Home.css';

export default function Home() {
  return (
    <div className='home'>
      <Header />
      <video id='bg-vdo'autoPlay loop muted poster="./images/hrx-hritik.jpg" />
      <source src="images/home_bg_vdo.mp4" type="video/mp4" />
      <Sidebar />
      <Footer />
    </div>
  )
}
