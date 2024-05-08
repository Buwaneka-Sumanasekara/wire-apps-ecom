
import { addItemToCart,removeItemFromCart } from '../store/modules/cartSlice';
import { useAppDispatch, useAppSelector } from './useReduxHooks';


/*=================Add item to cart====================*/
export const useAddItemToCart = (onSuccess=()=>{}) => {
    const dispatch = useAppDispatch();
    const addToCart = (product,size,qty) => {
        dispatch(addItemToCart({...product,seletedSize:size,qty}));
        onSuccess();
    }
    return { addToCart };
}


/*=================Remove item from cart====================*/
export const useRemoveItemFromCart = () => {
    const dispatch = useAppDispatch();
    const removeFromCart = (uniqueId) => {
        dispatch(removeItemFromCart({uniqueId}));
    }
    return { removeFromCart };
}



/*=================Get Cart Summary====================*/
export const useCartSummary = () => {
    const cartItems = useAppSelector(state => state.cart.items)
    const totalAmount = useAppSelector(state => state.cart.totalAmount)
   
    return {
        itemsCount:(cartItems || []).length,
        totalAmount:totalAmount
    };
}


/*=================Get Cart Items====================*/
export const useCartItems = () => {
    const cartItems = useAppSelector(state => state.cart.items)
    const totalAmount = useAppSelector(state => state.cart.totalAmount)
   
    return {
        items:(cartItems || []),
        totalAmount:totalAmount
    };
}