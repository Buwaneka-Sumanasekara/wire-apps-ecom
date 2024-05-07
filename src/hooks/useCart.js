import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart,removeItemFromCart } from '../store/modules/cartSlice';


/*=================Add item to cart====================*/
export const useAddItemToCart = () => {
    const dispatch = useDispatch();
    const addToCart = (product,size,qty) => {
        dispatch(addItemToCart({...product,seletedSize:size,qty}));
    }
    return { addToCart };
}


export const useRemoveItemFromCart = () => {
    const dispatch = useDispatch();
    const removeFromCart = (product) => {
        dispatch(removeItemFromCart(product));
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