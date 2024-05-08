import React from 'react';
import { FlatList } from 'react-native';
import CartItem from '../molecules/CartItem';


const Cart = ({ cartItems, totalAmount,onChangeQty }) => {
    return <FlatList
        data={cartItems}
        extraData={cartItems}
        renderItem={({ item }) =><CartItem item={item} onChangeQty={(item,size,qty)=>onChangeQty(item,size,qty)} />}
        keyExtractor={(item) => item.uniqueId}
    />
}

export default Cart;