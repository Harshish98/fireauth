import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase'
import './Signup.css'

function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

const handleSubmit = () =>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((res)=> {
      navigate('/login')
    console.log(res)
    })
    .catch((err)=>alert(err.message))
}

const handleGoogle = () => {
  const googleAuthProvider = new GoogleAuthProvider();
  signInWithPopup(auth, googleAuthProvider).then((res)=>navigate('/home'))
  .catch((err)=>alert(err.message))
}

  return (
    <div className='signup-box'>
      <div className='signup-wrapper'>
        <input type='email' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} /><br/>
        <input type='password' placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} /><br/>
        <button onClick={handleSubmit}>Submit</button>
        <p>Already have an account ?         <Link to="/login"><span>Login</span></Link>
</p>
<hr/>
<button onClick={handleGoogle}>Sign in Goggle</button>
        </div>
    </div>
  )
}

export default Signup