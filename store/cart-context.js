import React from 'react';

const CartContext =  React.createContext({
    data:[],    
    setData:(data) =>{},
    
});

export default CartContext;