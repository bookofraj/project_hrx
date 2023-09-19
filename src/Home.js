import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import Vdo from './Vdo';
import Footer from './Footer';
import './Home.css';

export default function Home() {
  return (
    <div className='home'>
      <Header />
      <Vdo />
      <Sidebar />
      <Footer />
    </div>
  )
}
