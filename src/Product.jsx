import React,{useState} from 'react'
import './style.css';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import productsData from './productsData.json';
import ProductCategories from './ProductCategories';
import { FaSearch } from 'react-icons/fa';
import {UserAuth} from './AuthContext';
import { useDispatch } from 'react-redux';
function Product({name,id,price,}) {
  const [input,setInput] = useState('');
  const {currentUser} = UserAuth();
  const navigate = useNavigate();
  const handleSearch = (e) => {
    setInput(e.target.value);
  }
  const filterProductsData = productsData.filter(product =>
    product.name.toLowerCase().includes(input.toLowerCase())
    );
  const dispatch = useDispatch();
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
        <div className='search' style={{marginTop:'70px'}}>
          <input placeholder='Search products...' value={input} onChange={handleSearch} className='search-input'/>
          <span className='search-icon'><FaSearch size={20}/></span>
        </div>

        <div className='product-grid'>
            {
                filterProductsData?.length>0?(
                filterProductsData.map(product => (
                    <ProductCard
                    key={product.id}
                    image = {product.image}
                    name = {product.name}
                    price = {product.price}
                    id = {product.id}
                    handler = {addToCartHandler}
                    />
                ))
                ):(
                  <h3>Product not found</h3>
                )
            }
        </div>
    </div>
    </>
  )
};
const ProductCard = ({name,id,price,handler,image}) => (
  <div className='product'>
    <img src={image} alt={name}/>
    <div className='product-info'>
        <div>{name}</div>
        <div>${price}</div>
        <button onClick={()=>handler({name,price,id,quantity:1,image})}>Add to Cart</button>
    </div>
  </div>
)

export default Product