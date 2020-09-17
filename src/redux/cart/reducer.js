import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, CLEAR_CART } from "./constants";

const INIT_STATE = {
    cartItems: JSON.parse(localStorage.getItem("cart")) || []   
}

const CartReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            if(true){ 
                const cartItems = [...state.cartItems, action.payload]; 
                localStorage.setItem("cart", JSON.stringify(cartItems)); 
                return {...state, cartItems} 
            }
            break;
        case REMOVE_ITEM_FROM_CART:
            if(true){
                const cartItems = [...state.cartItems];
                const index = cartItems.findIndex((item) => item.id === action.payload);
                if (index !== -1) {
                    cartItems.splice(index, 1)
                    return { ...state, cartItems };
                }
                return state;
            }
        case CLEAR_CART:
            localStorage.removeItem("cart")
            return {...state, cartItems: []}
        default:
            return state;
    }
};

export default CartReducer;