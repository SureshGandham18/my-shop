import {createReducer} from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    subTotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
};

const CartReducer = createReducer(initialState, {
    addToCart: (state, action) => {
        const item = action.payload;
        const existingItem = state.cartItems.find((i) => i.id === item.id);
        
        if(existingItem){
            existingItem.quantity += 1;
        }else{
            state.cartItems.push({...item,quantity:1});
        }
    },
    decrement : (state,action)=>{
        const item = state.cartItems.find(i=>i.id === action.payload);
        if(item.quantity > 1){
            state.cartItems.forEach((i)=>{
                if(i.id===item.id) 
                i.quantity-=1;
            })
        }

    },
    deleteFromCart: (state,action) => {
        const itemId = action.payload;
        state.cartItems = state.cartItems.filter((i) => i.id !== itemId);
    },
    calculatePrice: (state) => {
        const sum = state.cartItems.reduce(
            (total,item) => total + item.price * item.quantity,0
        );
        state.subTotal = sum;
        state.shipping = state.subTotal>100 ? 0:25;
        state.tax = +(state.subTotal * 0.18).toFixed();
        state.total = (state.subTotal + state.tax + state.shipping).toFixed();
    },
    
});
export default CartReducer;