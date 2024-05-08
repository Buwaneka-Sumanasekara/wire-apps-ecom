import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart,removeItemFromCart,updateItemQty } from '../store/modules/cartSlice';


/*=================Add item to cart====================*/
export const useAddItemToCart = (onSuccess=()=>{}) => {
    const dispatch = useDispatch();
    const addToCart = (product,size,qty) => {
        dispatch(addItemToCart({...product,seletedSize:size,qty}));
        onSuccess();
    }
    return { addToCart };
}

export const useUpdateItemToCart = (onSuccess=()=>{}) => {
    const dispatch = useDispatch();
    const updateCartItem = (id,size,qty) => {
        const uniqueId=`${id}-${size}`
        dispatch(updateItemQty({uniqueId,qty}));
        onSuccess();
    }
    return { updateCartItem };
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

export const useCartItems = () => {
    const cartItems = useSelector(state => state.cart.items)
    const totalAmount = useSelector(state => state.cart.totalAmount)
   
    return {
        items:(cartItems || []),
        totalAmount:totalAmount
    };
}