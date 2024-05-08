import React from 'react';
import { FlatList } from 'react-native';
import CartItem from '../molecules/CartItem';
import CartTotalSummary from '../atoms/CartTotalSummary';
import Spacer from '../atoms/Spacer';
import ListEmptyComponent from '../atoms/ListEmptyComponent';


const Cart = ({ cartItems, onChangeQty, onPressItem, onRemoveItem }) => {
    return (
        <FlatList
            data={cartItems}
            extraData={cartItems}
            renderItem={({ item }) => <CartItem item={item}
                onChangeQty={(item, size, qty) => onChangeQty(item, size, qty)}
                onPressItem={(item) => onPressItem(item)}
                onRemoveItem={(uniqueId) => onRemoveItem(uniqueId)}
            />}
            keyExtractor={(item) => item.uniqueId}
            ListFooterComponent={<Spacer isHeight={true} size={"[400px]"} />}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<ListEmptyComponent isLoading={false} text={"Cart is empty"} />}
            ListHeaderComponent={<CartTotalSummary />}
            stickyHeaderIndices={[0]}
        />
    );

}

export default Cart;