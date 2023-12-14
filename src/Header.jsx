import React from 'react'
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai';
import {useSelector} from 'react-redux'
import {PiShoppingCartFill} from 'react-icons/pi';
import { UserAuth } from './AuthContext';
function Header() {
  const {currentUser,logOut} = UserAuth();
  const {cartItems} = useSelector(state => state.cart);
  const navigate = useNavigate();
  const handleLogout = async() =>{
    try{
      await logOut();
      navigate('/');
      cartItems = []
    }catch(error){
      console.log(error);
    }
  }
  console.log(currentUser)
  return (
    <div className='header'>
        <div className='home'>
        <Link to ='/'><img className='logo' src='https://logopond.com/logos/4ef3906c9667cbcc660bc76c407c29f1.png'/></Link>
        <Link to='/products'><h3><AiFillHome size={20}/>Home</h3></Link>
        </div>
        {currentUser?.email?(
          <div className='buttons'>
            <Link to='/account' ><button className='signin'>Account</button></Link>
            <button className='signin' onClick={handleLogout}>LogOut</button>
            <Link to='/cart' style={{marginRight:'15px',color:'black'}}><PiShoppingCartFill size={30}/></Link>
          </div>
        ):(
            
          <div className='buttons'>
          <Link to='/signin'><button className='signin'>SignIn</button></Link>
          <Link to='/signup'><button className='signup'>SignUp</button></Link>
          </div>
        )}
    </div>
  )
}

export default Header