import React, { useCallback } from 'react';
import Cart from '../components/organisms/Cart';
import { useAddItemToCart, useCartItems, useRemoveItemFromCart, useUpdateItemToCart } from '../hooks/useCart';
import { useNavigation } from '@react-navigation/native';
import { useAddProductToCache } from '../hooks/useProducts';


const CartScreen = () => {
  const navigation = useNavigation();

  
  const { items, totalAmount } = useCartItems();
  const { addToCart } = useAddItemToCart();
  const { removeFromCart } = useRemoveItemFromCart();
  const { showItem } = useAddProductToCache((item) => {
    navigation.navigate('ProductScreen', {
      itemId: item.id
    })
  })

  const onChangeQty = useCallback((item, size, qty) => {
    addToCart(item, size, qty);
  }, [])



  return (
    <Cart
      cartItems={items}
      totalAmount={totalAmount}
      onChangeQty={(item, size, qty) => onChangeQty(item, size, qty)}
      onPressItem={(item) => showItem(item)}
      onRemoveItem={(uniqueId) => {
        removeFromCart(uniqueId)
      }}
    />
  );
}

export default CartScreen;