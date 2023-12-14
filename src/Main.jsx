import React from 'react'
import {Link} from 'react-router-dom';
function Main() {
  return (
    <div className='main-page'>
        <div className='background-image'>
            <h1>EASY SHOP ZONE</h1>
            <p>Welcome to EASY SHOP ZONE, where your shopping experience is about to be taken to a whole new level! We bring you a curated selection of the latest trends, premium quality products, and unbeatable deals, all in one convenient place.</p>
            <Link to='/products'>
                <button className='shopping-btn'>Start Shopping</button>
            </Link>
        </div>
    </div>
  )
}

export default Main