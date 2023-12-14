import React, { useState } from 'react'
import productsData from './productsData.json';
import { FaSearch } from 'react-icons/fa';
import './style.css';
import ProductCategories from './ProductCategories';
import { UserAuth } from './AuthContext';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
function Clothing() {
    const [input,setInput] = useState('');
    const {currentUser} = UserAuth();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSearch = (e) =>{
        setInput(e.target.value);
    }
    const clothing = productsData.filter(product =>
        product.category.includes('Clothing')
        );
    const addToCartHandler = (options) =>{
        if (currentUser){
            dispatch({type:'addToCart',payload:options});
            dispatch({type:'calculatePrice'});
            toast.success('Added to Cart');
        }else{
            navigate('/signin')
        }
    }
  return (
    <>
    <ProductCategories/>
    <div className='products'>
        <br/>
        <h1 className='heading'>Clothing</h1>
        <div className='search'>
        
          <input placeholder='Search products...' value={input} onChange={handleSearch} className='search-input'/>
          <span className='search-icon'><FaSearch size={20}/></span>
        </div>

        <div className='product-grid'>
            {
                clothing.map(product => (
                    <div key={product.id} className='product'>
                        <img src={product.image} alt={product.name}/>
                        <div className='product-info'>
                            <div>{product.name}</div>
                            <div>${product.price}</div>
                            <button onClick = {()=>addToCartHandler({
                                id : product.id,
                                name : product.name,
                                image : product.image,
                                price : product.price})}>Add to Cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Clothing