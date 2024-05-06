import { useDispatch } from 'react-redux';
import { addItemToCart,removeItemFromCart } from '../store/modules/cartSlice';
import { formatItemToCart } from '../utils/reduxUtils';


/*=================Add item to cart====================*/
export const useAddItemToCart = () => {
    const dispatch = useDispatch();
    const addToCart = (product) => {
        dispatch(addItemToCart(formatItemToCart(product)));
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


