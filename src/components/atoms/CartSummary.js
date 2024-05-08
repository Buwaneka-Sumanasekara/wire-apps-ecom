import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { useCartSummary } from '../../hooks/useCart';

const CartSummary = () => {
    const theme=useTheme()
    const {totalAmount}=useCartSummary()
    return (
        <View className={"flex flex-row items-center pr-4"}>
            <Ionicons name={"cart"} size={18} color={theme.colors.primary} />
            <Text className={"font-bold text-base text-slate-400 ml-2"}>{`${(totalAmount || 0).toFixed(2)}`}</Text>
        </View>
    )
}

export default CartSummary