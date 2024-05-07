import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';

const CartSummary = () => {
    const theme=useTheme()
    return (
        <View className={"flex flex-row items-center pr-4"}>
            <Ionicons name={"cart"} size={18} color={theme.colors.primary} />
            <Text className={"font-bold text-base text-slate-400 ml-2"}>{"100,00"}</Text>
        </View>
    )
}

export default CartSummary