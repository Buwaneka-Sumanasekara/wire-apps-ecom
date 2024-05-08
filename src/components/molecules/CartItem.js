import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import QtyInput from '../atoms/QtyInput';
import { formatPrice } from '../../utils/CommonUtils';

const CartItem = ({ item,onChangeQty ,onPressItem}) => {
    return <View className={"flex flex-row p-3"}>
        <TouchableOpacity className={"basis-1/6 pr-4 items-start"} onPress={()=>onPressItem(item?.productInfo)}>
            <Image source={{ uri: item?.productInfo?.mainImage }} resizeMode={"contain"} resizeMethod={"resize"} className={"w-full h-12"} />
        </TouchableOpacity>
        <View className={"basis-3/6 items-start"}>
            <Text className={"font-bold mb-1"}>{item.name}</Text>
            <View className={"flex flex-row mb-1"}>
                <Text className={"text-slate-500"}>{`Price: ${formatPrice(item.price,item.currency)}`}</Text>
            </View>
            <Text className={"bg-black text-xs text-white font-bold p-2"}>{`Size: ${item.size}`}</Text>
        </View>
        <View className={"basis-2/6 flex items-end"}>
            <Text className={"text-sm text-black font-bold mb-2"}>{`${formatPrice(item.lineAmount,item.currency)}`}</Text>
            <QtyInput qty={item.qty} onChangeQty={(qty) => {
                onChangeQty(item?.productInfo,item.size,qty)
            }} />
        </View>
    </View>;
}

export default CartItem;