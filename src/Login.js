import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

const handleSubmit = () =>{
    signInWithEmailAndPassword(auth, email, password)
    .then((res)=>{
      navigate('/home')
    })
    .catch((err)=>alert(err.message))
}

  return (
    <div className='signup-box'>
      <div className='signup-wrapper'>
        <input type='email' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} value={email} />
        <input type='password' placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} value={password} />
        <button onClick={handleSubmit}>Login</button>
        <p>New User ? <Link to="/"><span>Sign Up</span></Link></p>
        
        </div>
    </div>
  )
}

export default Login