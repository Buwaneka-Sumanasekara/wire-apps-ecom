import React from 'react';
import { FlatList, View } from 'react-native';
import CartItem from '../molecules/CartItem';
import CartTotalSummary from '../atoms/CartTotalSummary';
import Spacer from '../atoms/Spacer';
import ListEmptyComponent from '../atoms/ListEmptyComponent';


const Cart = ({ cartItems, onChangeQty, onPressItem }) => {
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={cartItems}
                extraData={cartItems}
                renderItem={({ item }) => <CartItem item={item}
                    onChangeQty={(item, size, qty) => onChangeQty(item, size, qty)}
                    onPressItem={(item) => onPressItem(item)}
                />}
                keyExtractor={(item) => item.uniqueId}
                ListFooterComponent={<Spacer isHeight={true} size={"[200px]"} />}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={<ListEmptyComponent isLoading={false} text={"Cart is empty"} />}
            />
            <CartTotalSummary />
        </View>
    );

}

export default Cart;