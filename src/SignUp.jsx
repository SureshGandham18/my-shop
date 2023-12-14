import React, { useState } from 'react'
import './signin.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from './AuthContext';
function SignUp() {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {signUp} = UserAuth();
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await signUp(email,password)
      navigate('/products')
    }catch(error){
      console.log(error);
    }
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <center><h2>SignUp</h2>
        <input type='text' placeholder='First Name' className='input'/>
        <input type='text' placeholder='Last Name' className='input'/>
        <input onChange={(e)=>setEmail(e.target.value)} placeholder='Email' type='email' className='input' autoComplete='email'/><br/>
        <input onChange={(e)=>setPassword(e.target.value)}  placeholder='Password' type='password' className='input' autoComplete='current-password'/><br/>
        <input className='button' type='submit'/>
        </center>
        <p>Already have a account, <Link to='/signin'>SignIn</Link></p>
      </form>
    </div>
  )
}

export default SignUp