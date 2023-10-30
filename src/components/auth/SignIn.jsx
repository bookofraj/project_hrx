import React from 'react'
import { useState } from 'react'

export default function SignIn() {
  return (
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    <div className='sign-in-container'>
        <form>
            <h1>Log In to your account</h1>
            <input type='email' 
            placeholder='Enter your email' 
            value={email}>
            </input>
            <input type='password' 
            placeholder='Enter your password' 
            value={password}>
            </input>
        </form>
        </div>
  )
}
