import React from 'react';
import { View, Text } from 'react-native';
import { useCartSummary } from '../../hooks/useCart';
import { formatPrice } from '../../utils/CommonUtils';

const CartTotalSummary = () => {
    const { totalAmount, itemsCount } = useCartSummary()
    return (
        <View className={"flex flex-col items-end py-5 pr-2 bg-slate-100 shadow absolute bottom-0 w-screen"}>
            <View className={"flex flex-row"}>
                <Text className={"font-normal text-base text-slate-600 ml-2 "}>{`No Of Items`}</Text>
                <Text className={"font-bold text-base text-slate-600 ml-2"}>{`${itemsCount}`}</Text>
            </View>
            <View className={"flex flex-row"}>
                <Text className={"font-normal text-base text-slate-800 ml-2"}>{`Total`}</Text>
                <Text className={"font-bold text-base text-slate-800 ml-2"}>{`${formatPrice(totalAmount, "GBP")}`}</Text>
            </View>
        </View>
    )
}

export default CartTotalSummary