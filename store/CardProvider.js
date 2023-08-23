import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    data: {},    
};

const cartReducer = (state, action)=>{
    //console.log(action.item);
    if(action.type === 'ADD'){
        let section = Object.keys(action.data)[0];

        //data[section]= action.data[section];
        state.data[section]= action.data[section];
        
        return {
            data:state.data
        };
    }

    
    return defaultCartState;
};

const CartProvider = props => {
    const[cartState, dispatchCartAction]= useReducer(cartReducer, defaultCartState);
    const addDataToCartHandler = (data) => {
        dispatchCartAction({
            type:'ADD',
            data:data
        });
    };
    

    const cartContext =  {
        data: cartState.data,        
        setData: addDataToCartHandler,        
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>;

};

export default CartProvider;
