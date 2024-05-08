import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart,removeItemFromCart } from '../store/modules/cartSlice';


/*=================Add item to cart====================*/
export const useAddItemToCart = (onSuccess=()=>{}) => {
    const dispatch = useDispatch();
    const addToCart = (product,size,qty) => {
        dispatch(addItemToCart({...product,seletedSize:size,qty}));
        onSuccess();
    }
    return { addToCart };
}


/*=================Remove item from cart====================*/
export const useRemoveItemFromCart = () => {
    const dispatch = useDispatch();
    const removeFromCart = (uniqueId) => {
        dispatch(removeItemFromCart({uniqueId}));
    }
    return { removeFromCart };
}



/*=================Get Cart Summary====================*/
export const useCartSummary = () => {
    const cartItems = useSelector(state => state.cart.items)
    const totalAmount = useSelector(state => state.cart.totalAmount)
   
    return {
        itemsCount:(cartItems || []).length,
        totalAmount:totalAmount
    };
}


/*=================Get Cart Items====================*/
export const useCartItems = () => {
    const cartItems = useSelector(state => state.cart.items)
    const totalAmount = useSelector(state => state.cart.totalAmount)
   
    return {
        items:(cartItems || []),
        totalAmount:totalAmount
    };
}