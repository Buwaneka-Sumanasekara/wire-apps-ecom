import React, { useCallback } from 'react';
import Cart from '../components/organisms/Cart';
import { useAddItemToCart, useCartItems, useUpdateItemToCart } from '../hooks/useCart';


const CartScreen = () => {
 
    const {items,totalAmount}=useCartItems();
    const {updateCartItem}=useUpdateItemToCart();

    const onChangeQty=useCallback((item,size,qty)=>{
        updateCartItem(item.id,size,qty);
    },[])

  return (
    <Cart
     cartItems={items}
     totalAmount={totalAmount}
     onChangeQty={(item,size,qty)=>onChangeQty(item,size,qty)}
    />
  );
}

export default CartScreen;