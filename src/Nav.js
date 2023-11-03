import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Plans from './Plans';
import Products from './Products';

export default function Nav() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/home' elemnet={<Home />}/>
          <Route path='/plans' element={<Plans />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
