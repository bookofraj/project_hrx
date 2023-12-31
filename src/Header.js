import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import logo from "./images/hrx-logo.png";
import lginbanner from './images/loginbanner.png';
import { useFirebase } from "./Context/Firebase";

export default function Header() {

  const [displayLogin, setDisplayLogin] = useState('true');
  console.log(displayLogin);

  const firebase = useFirebase();

  const handleUserButton = () => {
    setDisplayLogin(!displayLogin);
    console.log(displayLogin);
  }

  return (
    <>
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
          <li><Link to='/products'>Products</Link></li>
          {/* <li id='hgadj' className='lgbtn'><button onClick={handleUserButton()}>Login</button></li> */}
            <input type="checkbox" id='user-chkbox'/>
            <li><label htmlFor='user-chkbox' 
            className='btn' id='no-user'
            onClick={handleUserButton}>Log In</label></li>
        </ul>
    </nav>
   {/* <div className="login">
        <form action="submit" className="lgin-frm">
          <div className="internal">
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
          <button>Login</button>
          </div>
        </form>
        <img src={lginbanner} alt="login banner" />
      </div> */}
    </>
  )
}
