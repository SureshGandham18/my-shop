import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { FaLaptop, FaTshirt, FaBook, FaPalette } from 'react-icons/fa';
import { FaFemale } from 'react-icons/fa';
function ProductCategories() {
  return (
    <div className='categories'>
        <Link to = '/products/electronics'><div><FaLaptop size={45}/></div></Link>
        <Link to='/products/clothes'><div><FaTshirt size={45}/></div></Link>
        <Link to='/products/books'><div><FaBook size={45}/></div></Link>
        <Link to='/products/beauty'><div><FaFemale size={45}/></div></Link>
        <Link to='/products/homedecor'><div><FaPalette size={45}/></div></Link>
    </div>
  )
}

export default ProductCategories