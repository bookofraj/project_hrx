import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './About.css';

export default function About() {
  return (
    <div className='about'>
      <Header />
      <Sidebar />
      <Footer />
    </div>
  )
}
