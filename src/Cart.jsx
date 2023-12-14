import React,{useEffect, useState} from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { UserAuth } from './AuthContext';
import {firestore} from './firebase';
import {doc,setDoc} from 'firebase/firestore';
function Cart() {
    const {cartItems,subTotal,tax,shipping,total} = useSelector(state => state.cart);
    const {currentUser} = UserAuth()
    const [items,setItems] = useState([]);
    if (currentUser){
        console.log(cartItems)
    }
    
    const dispatch = useDispatch();
    const increment = (id) => {
        dispatch({
            type:'addToCart',
            payload:{id},
        });
        dispatch({type:'calculatePrice'});
    }
    const decrement = (id) =>{
        dispatch({
            type:'decrement',
            payload:id,
        });
        dispatch({type:'calculatePrice'});
    }
    const deleteHandler = (id) =>{
        dispatch({
            type:'deleteFromCart',
            payload:id,
        });
        dispatch({type:'calculatePrice'});
    }
    const userDocRef = doc(firestore, 'users', currentUser?.email);
    // useEffect(() => {
    //     if (currentUser?.email) {
    //       saveCartItems(cartItems);
    //     }
    //   }, [cartItems, currentUser]);
    // const saveCartItems = async (cartItems) => {
    //     try {
    //       await setDoc(userDocRef, { savedItems: cartItems }, { merge: true });
    //       console.log('Document updated successfully!');
    //     } catch (error) {
    //       console.error('Error updating document:', error);
    //     }
    //   };
    
    
    return(
        <div className='cart'>
            <br/>
            <br/>
            <br/>
            <main>
                {
                    cartItems.length > 0 ? (
                        cartItems.map(i => (
                            <CartItem 
                            image = {i.image}
                            name = {i.name}
                            price = {i.price}
                            qty = {i.quantity}
                            id = {i.id}
                            key = {i.id}
                            decrement = {decrement}
                            increment = {increment}
                            deleteHandler = {deleteHandler}
                            />
                        ))
                    ):(
                        <h1>No Items Yet!!</h1>
                    )
                }
            </main>
            <aside className='shippingDetails'>
                <h2>Subtotal : ${subTotal}</h2>
                <h2>Shipping : ${shipping}</h2>
                <h2>Tax : ${tax}</h2>
                <h2>Total : ${total}</h2>
            </aside>
        </div>
    )
}

const CartItem = ({image,name,price,qty,decrement,increment,deleteHandler,id}) =>(
    <div className='cartItem'>
        <img src = {image} alt="Item"/>
        <article>
            <h3>{name}</h3>
            <p>${price}</p>
        </article>
        <div>
            <button onClick={()=>decrement(id)}>-</button>
            <h4>{qty}</h4>
            <button onClick={()=>increment(id)}>+</button>
        </div>
        <AiFillDelete onClick={()=>deleteHandler(id)}/>
    </div>
)
export default Cart