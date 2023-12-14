import React,{useState} from 'react'
import './signin.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from './AuthContext';
function SignIn() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {currentUser,logIn} = UserAuth();
  const navigate = useNavigate();
  const [error,setError] = useState('');
  const handleSubmit = async(e) => {
    e.preventDefault()
    setError('');
    try{
      await logIn(email,password)
      navigate('/products')
    }catch(error){
      console.log(error)
      setError(error.message)
    }
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <center><h2>SignIn</h2>
        
        {error?<p style={{backgroundColor:"#E84B4F",padding:"7px"}}>{error}</p>:null}
        <input onChange={(e)=>setEmail
            (e.target.value)} placeholder='email' type='email' className='input'/><br/>
        <input onChange={(e)=> setPassword
            (e.target.value)} placeholder='password' type='password' className='input'/><br/>
        <button className='button'>SignIn</button>
        </center>
        <p>New user,create account here <Link to='/signup'>SignUp</Link></p>
      </form>
    </div>
  )
}

export default SignIn